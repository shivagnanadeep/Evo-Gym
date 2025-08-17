import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'

import HText from '@/shared/HText'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}
const ContactUs = ({ setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm()
  const onSubmit = async (e: any) => {
    // e.preventDefault()
    const isValid = await trigger()
    if (!isValid) {
      e.preventDefault()
    }
  }
  const inputStyles = `mt-2 w-full rounded-lg bg-[#FFA6A3]
  px-5 py-3 placeholder-white`
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: {
              opacity: 0,
              x: -50,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
        >
          <HText>
            <span className="text-[#FF6B66]">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>
        {/* FORM and IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: {
                opacity: 0,
                y: 50,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/1fd42ec4419941ece9f4da2aeb8147d8"
            >
              <input
                type="text"
                className={inputStyles}
                placeholder="NAME"
                {...register('name', {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-[#FF6B66]">
                  {errors.name.type === 'required' && 'This field is required.'}
                  {errors.name.type === 'maxLength' &&
                    'Max length is 100 char.'}
                </p>
              )}
              <input
                type="text"
                className={inputStyles}
                placeholder="EMAIl"
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-[#FF6B66]">
                  {errors.email.type === 'required' &&
                    'This field is required.'}
                  {errors.email.type === 'pattern' && 'Invalid Email Address'}
                </p>
              )}
              <textarea
                className={inputStyles}
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                {...register('message', {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-[#FF6B66]">
                  {errors.message.type === 'required' &&
                    'This field is required.'}
                  {errors.message.type === 'maxLength' &&
                    'Max length is 2000 char.'}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-[#FFC132] px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            variants={{
              hidden: {
                opacity: 0,
                y: 50,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            className="relative mt-16 basis-2/5 md:mt-0"
          >
            <div className="w-full before:absolute before:-right-10 before:-bottom-20 before:z-[-1] md:before:content-[url('@/assets/EvolveText.png')]">
              <img
                className="w-full"
                src={ContactUsPageGraphic}
                alt="contact-us-page-graphic"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactUs
