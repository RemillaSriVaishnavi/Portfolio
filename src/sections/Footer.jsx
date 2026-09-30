import Container from '../components/Container'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 light:border-slate-200">
      <Container className="py-8">
        <p className="text-center text-sm text-slate-400 light:text-slate-500">
          © 2026 Remilla Sri Vaishnavi. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}