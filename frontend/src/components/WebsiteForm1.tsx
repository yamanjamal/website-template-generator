import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

const websiteFormSchema = yup
  .object({
    title: yup
      .string()
      .email('Field should contain a valid Title')
      .required()
      .label('Title'),
    description: yup
      .string()
      .email('Field should contain a valid e-mail')
      .required()
      .label('Description'),
    target_user: yup
      .string()
      .email('Field should contain a valid e-mail')
      .required()
      .label('Targe User'),
  })
  .required()

type websiteForm = yup.InferType<typeof websiteFormSchema>

export default function WebsiteForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<websiteForm>({
    resolver: yupResolver(websiteFormSchema),
  })

  const navigate = useNavigate()

  // const { mutate: login, error }: { mutate: any; error: any } = _AuthService
  //   .login()
  //   .useMutation({
  //     onSuccess: () => {
  //       toast.success('welcome back', {
  //         role: 'slide',
  //       })
  //       navigate('/dashboard')
  //     },
  //   })

  const onSubmit = (data: websiteForm) => {
    navigate('/website')

    // login(data)
    console.log(data)
  }

  return (
    <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        alt="logo"
                      />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        CustomWebGen
                      </h4>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <p className="mb-4">What kind of website do you want</p>
                      {/* <!--Username input--> */}
                      <div className="relative mb-8" data-te-input-wrapper-init>
                        <input
                          required
                          id="title"
                          {...register('title')}
                          // error={!!errors.title?.message}
                          autoComplete="title"
                          autoFocus
                          type="text"
                          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          placeholder="Title"
                          // helperText={
                          //   errors.title?.message?.toString() ??
                          //   'Enter Your title'
                          // }
                        />
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Title
                        </label>
                      </div>
                      {/* <!--description input--> */}
                      <div className="relative mb-8" data-te-input-wrapper-init>
                        <input
                          required
                          id="description"
                          {...register('description')}
                          // error={!!errors.description?.message}
                          autoComplete="description"
                          autoFocus
                          type="text"
                          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          placeholder="Description"
                        />
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Description
                        </label>
                      </div>
                      {/* <!--Targe Users input--> */}
                      <div className="relative mb-8" data-te-input-wrapper-init>
                        <input
                          required
                          id="target_user"
                          {...register('target_user')}
                          // error={!!errors.target_user?.message}
                          autoComplete="target_user"
                          autoFocus
                          type="text"
                          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          placeholder="Targe Users"
                        />
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Targe Users
                        </label>
                      </div>

                      {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="submit"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          style={{
                            background:
                              'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
                          }}
                        >
                          Genrate
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      Empowering Your Online Presence with Personalized Websites
                    </h4>
                    <p className="text-sm">
                      This website has been designed to facilitate the
                      generation of custom websites tailored to the specific
                      requirements and preferences of users. By providing input
                      and parameters, users can create unique and personalized
                      websites that cater to their individual needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
