import { permanentRedirect } from 'next/navigation';

// The template's placeholder Services page was replaced by the homepage
// "Three ways in" section in the positioning rebuild (see CHANGES.md).
export default function ServicesPage() {
  permanentRedirect('/#session');
}
