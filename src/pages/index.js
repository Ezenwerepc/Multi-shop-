import Head from 'next/head';
import MainNavigation from '@/components/MainNavigation';
import HomePage from '@/pages/HomePage/index.js';




export default function Home() {
  return (
    <>
      <Head>
      <meta charset="utf-8"/>
    <title>MultiShop - Online Shop Website Template</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <meta content="Free HTML Templates" name="keywords"/>
    <meta content="Free HTML Templates" name="description"/>
    <link href="assets/img/favicon.ico" rel="icon"/>

  
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>  
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"/>

    <link href="assets/lib/animate/animate.min.css" rel="stylesheet"/>
    <link href="assets/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet"/>

    <link href="assets/css/style.css" rel="stylesheet"/>

    
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
    <script src="assets/lib/easing/easing.min.js"></script>
    <script src="assets/lib/owlcarousel/owl.carousel.min.js"></script>

    
    <script src="assets/mail/jqBootstrapValidation.min.js"></script>
    <script src="assets/mail/contact.js"></script>

    <script src="assets/js/main.js"></script>
      </Head>

      <div>
      <MainNavigation/>
      <HomePage/>

      </div>
    </>
  )
}
