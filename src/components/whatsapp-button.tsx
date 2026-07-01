import Link from "next/link";
import { MessageCircle } from "lucide-react";

const MSG = "Merhaba, 3D tabela hakkında bilgi almak istiyorum.";

export function WhatsAppButton() {
  const href = "https://wa.me/905446732202?text=" + encodeURIComponent(MSG);
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-1 ring-black/5 transition-transform hover:scale-110"
    >
      <MessageCircle className="size-7" />
    </Link>
  );
}
