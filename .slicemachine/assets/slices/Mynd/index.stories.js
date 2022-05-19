import MyComponent from '../../../../slices/Mynd';

export default {
  title: 'slices/Mynd'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"mynd","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=900&h=500&fit=crop"}},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _MyndMedTexta = () => <MyComponent slice={{"variation":"myndMedTexta","name":"mynd með texta","slice_type":"mynd","items":[],"primary":{"image":{"dimensions":{"width":1000,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1000&h=500&fit=crop"},"imageText":[{"type":"paragraph","text":"Laboris veniam sint quis. Labore culpa qui elit eiusmod minim eiusmod in.","spans":[]}],"position":true},"id":"_MyndMedTexta"}} />
_MyndMedTexta.storyName = 'mynd með texta'

export const _MyndMedTextaOgLink = () => <MyComponent slice={{"variation":"myndMedTextaOgLink","name":"Mynd með texta og link","slice_type":"mynd","items":[],"primary":{"image":{"dimensions":{"width":1000,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da?w=1000&h=500&fit=crop"},"imageText":[{"type":"paragraph","text":"Excepteur consequat consequat eiusmod nisi elit nulla. Tempor tempor consequat esse dolor amet non. Non labore sunt veniam Lorem nulla voluptate ullamco amet.","spans":[]}],"position":true,"link":"reinvent cross-media synergies"},"id":"_MyndMedTextaOgLink"}} />
_MyndMedTextaOgLink.storyName = 'Mynd með texta og link'
