import og from 'open-graph';


const getOg = () => new Promise((resolve, reject) => {
  const url = 'https://bbs.ruliweb.com/hobby/board/300117/read/30653554';
  og(url, function (err, meta) {
    if(err) {
      reject(err);
      return;
    }
    resolve(meta);
  });

}); 

export async function getStaticProps() {  
  const test = await getOg();
  return { props: {test} }
}



const PreviewUrl = ({test}) => {
  console.log('test',test);
  
  return (
    <>
    </>
  )
}
