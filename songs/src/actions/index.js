//named export, allow us to export many methods from a single file and then you have to import it with {}

export const selectSong = (song)=>{
  return{
    type: 'SONG_SELECTED',
    payload: song,
  }
}

// the payload is optional, but the type is required


