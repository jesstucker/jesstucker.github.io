<script context="module">
  // import fs from 'fs';
  // const MUSIC_DIR = './static/techno';
  // let musicList = []

  // const files = fs.readdirSync(MUSIC_DIR);

  // fs.writeFileSync(`${MUSIC_DIR}/musicList.json`, 
  // JSON.stringify(files.map(file => {
  //     return {"filename": file}
  //   })), (err) => {
  //   if (err) throw err;
  //   console.log('Data written to file'); 
  // })
  
</script>

<script>
    import Notecard from './Notecard.svelte'
    let tracks;
   
    function getTracks() {
        // var fileReader = new FileReader();

            fetch('./techno/musicList.json')
                .then(resp => resp.json())
                .then(foo => console.log(foo))
                // .then(blob => console.log(typeof blob))
                // .then(blob => fileReader.readAsArrayBuffer(blob))
                // .then(blob => console.log(blob))

        // new Audio('techno/;3-317235075.mp3').play()
    }
    
    // const blah = preload()

</script>
<div >preload</div>
<div>  </div>
<div></div>
<div 
  on:click={getTracks} 
  >clickme</div>