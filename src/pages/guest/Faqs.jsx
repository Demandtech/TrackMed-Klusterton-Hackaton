const Faqs = () => {
  return (
    <div className='px-5 lg:px-10 font-poppins pt-5 lg:pt-10'>
      <h2 className='text-primary80 text-2xl font-bold tracking-[3.2px] lg:text-[2.5rem]  mb-5'>
        Frequently Asked Questions
      </h2>
      <ul className='tracking-[-0.75px] lg:tracking-[1.2px] text-sm  lg:text-2xl list-outside list-disc pl-5 lg:pl-10'>
        <p className='-ml-5 lg:-ml-7 mb-2'>
          Q: How do I add a new medication to TrackMed?
        </p>
        <li className='mb-1'>
          A: Adding a new medication to TrackMed is easy! Simply open the
          website, go to the &ldquo;Medical Details&rdquo; tab. From there, you
          can enter the medication name, dosage, and set the schedule for
          reminders. If you need a hand, our step-by-step guide in the app will
          walk you through the process.
        </li>
        <p className='-ml-5 lg:-ml-7 mb-2'>
          Q: Can I receive reminders on multiple devices?{' '}
        </p>
        <li className='mb-1 '>
          A: Yes, you can receive reminders on multiple devices. TrackMed is
          designed to sync your medication data across all your devices. Make
          sure you are logged in with the same account on each device, and your
          reminders will stay consistent, providing you with the flexibility to
          manage your medications seamlessly.
        </li>
        <p className='-ml-5 lg:-ml-7 mb-2'>Q: What happens if I miss a dose?</p>
        <li className='mb-1'>
          A: If you miss a dose, don&apos;t worry! TrackMed allows you to log
          when you&aps;ve taken a medication outside the scheduled time. Also,
          we would remind you after 5 minutes. Remember, it&apos;s important to
          follow your healthcare provider&apos;s advice, and if you have
          concerns about missed doses, consult with them for guidance.
        </li>
      </ul>
    </div>
  )
}

export default Faqs
