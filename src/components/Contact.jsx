import { useState } from 'react'
import { PERSONAL } from '../data'
import { useInView } from '../hooks/useInView'
import SectionLabel from './SectionLabel'
import styles from './Contact.module.css'

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.')
      return
    }
    // ── Replace this with your actual form submission logic (EmailJS, Formspree, etc.) ──
    console.log('Form submitted:', form)
    setSent(true)
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>
        <SectionLabel>Get In Touch</SectionLabel>

        <div
          ref={ref}
          className={`${styles.content} ${inView ? styles.visible : ''}`}
        >
          <p className={styles.note}>{PERSONAL.contactNote}</p>

          {sent ? (
            <div className={styles.success}>
              <span className={styles.successIcon}>✅</span>
              <h3 className={styles.successTitle}>Message Sent!</h3>
              <p className={styles.successText}>I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <input
                className={styles.field}
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
              />
              <input
                className={styles.field}
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
              />
              <textarea
                className={`${styles.field} ${styles.textarea}`}
                name="message"
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={handleChange}
              />
              {error && <p className={styles.error}>{error}</p>}
              <button type="submit" className={styles.sendBtn}>
                Send Message
              </button>
            </form>
          )}

          {/* Info row */}
          <div className={styles.infoRow}>
            <div className={styles.infoItem}>📧 {PERSONAL.email}</div>
            <div className={styles.infoItem}>📍 {PERSONAL.location}</div>
            <div className={styles.infoItem}>🎓 {PERSONAL.course}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
