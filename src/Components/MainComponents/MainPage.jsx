import { FloatButtons, Header, Main, DialogBox, Footer } from './';
import header_img from '../../images/elementos/main_cover.webp';
import '../../styles/MainPage.css';

export default function MainPage() {
  return (
    <section>
      <FloatButtons />
      <Header cover={header_img} />
      <Main />
      <DialogBox />
      <Footer />
    </section>
  );
}
