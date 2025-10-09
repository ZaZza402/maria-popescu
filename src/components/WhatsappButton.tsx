const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/40772246316"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-accent text-white shadow-soft transition-colors hover:opacity-90"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp text-3xl"></i>
    </a>
  );
};

export default WhatsappButton;