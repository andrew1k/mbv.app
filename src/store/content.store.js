// noinspection JSUnresolvedReference

import {defineStore, storeToRefs} from 'pinia'
import {db, storage} from '@/plugins/firebase.config'
import {
  doc,
  collection,
  deleteDoc,
  setDoc,
  query,
  orderBy,
  limit,
  getDocs,
  getDoc,
} from 'firebase/firestore'
import {uploadBytes, ref as sref, getDownloadURL, deleteObject} from 'firebase/storage'
import {ref} from 'vue'
import {useAppState} from '@/store/app.store'

export const useContentStore = defineStore('contentStore', () => {
  const news = ref([])
  const newsIds = ref([])
  const stories = ref([])
  const storiesIds = ref([])
  const newsItem = ref()
  const sunday = ref({docId: '0'})
  const appState = useAppState()
  const {isPending} = storeToRefs(appState)

  async function getSunday() {
    isPending.value = true
    const q = query(collection(db, 'sunday'), orderBy('timeId', 'desc'), limit(1))
    const qSnapshot = await getDocs(q)
    qSnapshot.forEach(doc => {
      const docId = doc.id
      sunday.value = {...doc.data(), docId}
      isPending.value = false
    })
  }

  async function getNews() {
    isPending.value = true
    const newsSnapshoot = await getDocs(collection(db, 'newsfeed'))
    newsSnapshoot.forEach(doc => {
      const id = doc.id
      const data = doc.data()
      if (!newsIds.value.includes(id)) {
        newsIds.value.push(id)
        news.value.unshift({...data, id})
      }
    })
    isPending.value = false
  }

  async function getNewsItem(newsId) {
    const newsSnap = await getDoc(doc(db, 'newsfeed', newsId))
    if (newsSnap.exists()) newsItem.value = newsSnap.data()
  }


  async function getStories() {
    isPending.value = true
    const storySnapshot = await getDocs(collection(db, 'stories'))
    storySnapshot.forEach(doc => {
      const id = doc.id
      const data = doc.data()
      if (!storiesIds.value.includes(id)) {
        storiesIds.value.push(id)
        stories.value.unshift({id, ...data})
      }
    })
    isPending.value = false
  }

  const sgLeadersData = ref([])
  async function getSGLeaders() {
    const leadersSnapshoot = await getDocs(collection(db, 'sgLeaders'))
    leadersSnapshoot.forEach(doc => {
      const data = {...doc.data(), id: doc.id}
      const ids = sgLeadersData.value.map(el => el.id)
      if (!ids.includes(doc.id)) sgLeadersData.value.push(data)
    })
  }


  // ------------------------------------------------------------------------------------------------------------------------------ admin Funcs
  async function uploadNews(imgs, payload) {
    const newsId = Date.now().toString()
    let filePath
    let url
    let image

    try {
      // get image from fileInput array
      imgs.forEach(img => {
        image = img
      })
      filePath = `newsfeed/${newsId}/${image.name}`
      // upload image
      await uploadBytes(sref(storage, filePath), image)
      url = await getDownloadURL(sref(storage, filePath))
      // save to db
      await setDoc(doc(db, 'newsfeed', newsId), {
        title: payload.title,
        subtitle: payload.subtitle,
        text: payload.text,
        leader: payload.leader,
        form: payload.form,
        formSchema: payload.formSchema,
        url: url,
        filePath: filePath,
      })
      await alert('All done, news saved')
    } catch (e) {
      console.log(e)
    }
  }

  async function deleteNewsItem(newsItem) {
    await deleteObject(sref(storage, newsItem.filePath))
    await deleteDoc(doc(db, 'newsfeed', newsItem.id))
    await alert('all done')
  }
  async function deleteStoryItem(storyItem) {
    await deleteObject(sref(storage, storyItem.filePath))
    await deleteDoc(doc(db, 'newsfeed', storyItem.id))
    await alert('all done')
  }

  async function uploadStory(prevImg, storyImgs, title, link, linkColor, linkLabel) {
    const storyId = Date.now().toString()

    try {
      // getting preview image form array
      let previewImg
      prevImg.forEach(img => {
        previewImg = img
      })
      // path in storage
      const previewImgPath = `stories/${storyId}/${previewImg.name}`
      // uploading img to storage
      await uploadBytes(sref(storage, previewImgPath), previewImg)
      // getting img url in storage
      const previewImgUrl = await getDownloadURL(sref(storage, previewImgPath))

      // same as prev, but to group of imgs, and save its path & url to array
      const storyImages = []
      for (const strImg of storyImgs) {
        const strImgPath = `/stories/${storyId}/storyIgms/${strImg.name}`
        await uploadBytes(sref(storage, strImgPath), strImg)
        let strImgUrl = await getDownloadURL(sref(storage, strImgPath))
        storyImages.push({strImgPath, strImgUrl})
      }

      await setDoc(doc(db, 'stories', storyId), {
        previewImgUrl,
        previewImgPath,
        storyImages,
        title,
        link,
        linkColor,
        linkLabel,
      })
      await alert('all done successfully')
    } catch (e) {
      console.log(e)
    }
  }

  async function updateSunday(payload) {
    const timeId = Date.now().toString()
    await setDoc(doc(db, 'sunday', timeId), {...payload, timeId})
    await alert('Обновлено')
  }

  return {
    getSunday,
    getStories,
    getNews,
    getNewsItem,
    news,
    stories,
    newsItem,
    sunday,
    sgLeadersData,
    getSGLeaders,
    // -------------------------- admin Funcs
    uploadNews,
    deleteNewsItem,
    deleteStoryItem,
    uploadStory,
    updateSunday,
  }
})
