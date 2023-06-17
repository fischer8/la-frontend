export default function FooterArticle() {
  const booking = 'https://www.booking.com/Share-UvH4byv';
  return (
    <article className='footer-article-container'>
        <h5 className='footer-address'>Tv. Francisco de Lima, São Miguel dos Milagres - AL, 57940-000</h5>
        <a href={booking} rel='noreferrer' target='_blank'>
          <span className='footer-button'>Faça sua reserva</span>
        </a>
    </article>
  );
}
