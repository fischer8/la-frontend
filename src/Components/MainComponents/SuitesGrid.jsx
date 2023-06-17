import foto1 from '../../images/photos/quartos/quarto1.webp'
import foto2 from '../../images/photos/quartos/quarto2.jpeg'
import foto3 from '../../images/photos/quartos/quarto3.jpeg'
import foto4 from '../../images/photos/quartos/quarto4.jpeg'
import foto5 from '../../images/photos/quartos/quarto5.jpeg'
import foto6 from '../../images/photos/quartos/quarto6.jpeg'


export default function SuitesGrid() {
  const photos = [foto1,foto2,foto3,foto4,foto5,foto6];
  const menu = photos.map((photo) => <img className='main-photos' src={photo} alt='' key={photo.charAt(20)} />)
  return (
    <section className='main-suites'>
      {menu}
    </section>
  );
}

