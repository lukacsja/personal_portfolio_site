import Image from 'next/image';
import Link from 'next/link';

interface SocialLinkProps {
  href: string;
  src: string;
  alt: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, src, alt }) => (
  <Link
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className='flex h-12 w-12 items-center justify-center border-x border-lines transition-all duration-300 hover:bg-lines'
  >
    <Image src={src} alt={alt} width={24} height={24} />
  </Link>
);

export default SocialLink;
