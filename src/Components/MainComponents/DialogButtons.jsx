export default function DialogButtons() {
  const zapZap = 'https://api.whatsapp.com/send?phone=5511994352770';
  const location = 'https://goo.gl/maps/BBaptvShMhKwvunb6';
  return (
    <section className='dialog-buttons'>
      <a className='contact-button' href={zapZap} rel='noreferrer' target='_blank'>Contato</a>
      <a className='location-button' href={location} rel='noreferrer' target='_blank'>Localização no Maps</a>
    </section>
  );
}
