import { permanentRedirect } from 'next/navigation';

// The template's placeholder About page was replaced by the homepage About
// section in the positioning rebuild (see CHANGES.md).
export default function AboutPage() {
  permanentRedirect('/#about');
}
