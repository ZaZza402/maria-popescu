import React from 'react';

type Props = {
  iconClass: string; // e.g. "fas fa-phone" or "fab fa-whatsapp"
  href: string;
  children: React.ReactNode; // the label text
};

const ContactRow: React.FC<Props> = ({ iconClass, href, children }) => {
  return (
    <div className="flex items-center gap-3 text-brand-text/80 whitespace-nowrap">
      <span aria-hidden className="inline-flex w-5 h-5 items-center justify-center flex-shrink-0 text-brand-accent">
        <i className={`${iconClass} text-[18px] leading-none`} />
      </span>
      <a href={href} className="hover:text-brand-accent transition-colors leading-none relative top-[1px] md:top-0">
        {children}
      </a>
    </div>
  );
};

export default ContactRow;
