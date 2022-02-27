import React, { useEffect } from 'react'
import { apolloClient } from '../../apollo/apolloClient'
import { useRouter } from 'next/router'
import { ACTIVATE_USER } from '../../apollo/mutations/activateUser'

interface ServerSideProps {
  query: {
    activationCode: string
  }
}

interface Props {
  success?: boolean
  error?: string
}

const Activate = ({ success, error }: Props) => {
  const router = useRouter()

  useEffect(() => {
    if (router.query.activationCode) {
      const {
        query: {
          activationCode
        }
      } = router

      const activateUser = async () => {
        await apolloClient.mutate({
          mutation: ACTIVATE_USER,
          variables: {
            activationCode
          }
        })
      }

      activateUser()
    }
  }, [router])

  // if (error || !success) {
  //   return (
  //     <div className='main-background center-content full-screen text-white text-center'>
  //       <Alert variant='danger'>
  //         <Alert.Heading>Vyskytla se chyba!</Alert.Heading>
  //         {error}<Alert.Link href='/'> Zpět na hlavní stránku</Alert.Link>
  //       </Alert>
  //     </div>
  //   )
  // }

  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push('/login')
  //   }, 3000)
  // }, [])

  return (
    <p>Aktivace proběhla úspěšně. Za okamžik budete přesměrováni na přihlašovací stránku.</p>

  )
}

// export const getServerSideProps = async ({ query }: ServerSideProps) => {
//   try {
//     const {
//       activationCode
//     } = query

//     await apolloClient.mutate({
//       mutation: ACTIVATE_USER,
//       variables: {
//         activationCode
//       }
//     })

//     return {
//       props: {
//         success: true
//       }
//     }
//   } catch (err: any) {
//     let error

//     switch (err.message) {
//       case 'user already activated':
//         error = 'uživatel již byl aktivován.'
//         break
//       case 'activation code not found':
//         error = 'aktivační kód nenalezen.'
//         break
//       default:
//         error = 'zkuste to prosím znovu.'
//     }

//     return {
//       props: {
//         error
//       }
//     }
//   }
// }

export default Activate
