<?php 

if(array_key_exists("preferredLanguage", $_COOKIE)) {

  $preferredLanguage = $_COOKIE['preferredLanguage'];

  if ($preferredLanguage === 'CZ') {
    $currentLang = 'CZ';
    $otherLang = 'ENG';
  } 

  if ($preferredLanguage === 'ENG') {
    $currentLang = 'ENG';
    $otherLang = 'CZ';
  } 
} else {
  $currentLang = 'CZ';
  $otherLang = 'ENG';
}


if (array_key_exists("language", $_GET)) {
  $currentLang = $_GET["language"];
  setcookie("preferredLanguage", $currentLang, time() + 60*60*24*365 );
  
  if ($currentLang === 'CZ') {
    $otherLang = 'ENG';
  } else {
    $otherLang = 'CZ';
  }
} 

?>

<!DOCTYPE html>
<html lang="<?php if ($currentLang === 'CZ') { echo 'cz';} else {echo 'en';}
              ?>">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="stylesheet" href="../css/style.css" />

    <link rel="icon" type="image/png" href="https://codehard.cz/img/favicon.png" />

    <title>Code hard | Web development <?php if ($currentLang === 'CZ') { echo 's';} else {echo 'with';}
              ?> ❤</title>
  <script defer src="./js/script.js"></script>
  </head>
  <body>
    <!-- TODO: dodelat loader -->

    <nav class="navigation-wrapper">
      <ul class="navigation">
        <li class="navigation__item">
          <a href="#projects" class="navigation__link navigation__link--projects">
            <?php if ($currentLang === 'CZ') { echo 'Projekty';} else {echo 'Projects';}
              ?> 
            </a>
        </li>
        <li class="navigation__item">
          <a href="#about" class="navigation__link navigation__link--about">
          <?php if ($currentLang === 'CZ') { echo 'Info';} else {echo 'About me';}
              ?> 
          </a>
        </li>
        <li class="navigation__item">
          <a href="#contact" class="navigation__link navigation__link--contact">
          <?php if ($currentLang === 'CZ') { echo 'Kontakt';} else {echo 'Contact';}
              ?> 
          </a>
        </li>
      </ul>
      <div class="navigation-wrapper--lang">
        <!-- <a href="./CZ/indexCZ.html" class="navigation__lang">ENG</a> -->
        <?php 
        echo "<a href='?language=$otherLang' class='navigation__lang'>$otherLang</a>";        
        ?>
      </div>
    </nav>
    
    <div class="button__scroll-top" onclick="scrollToTop();">
      <img
      class=""
      src="https://codehard.cz/img/arrow-top.svg"
      alt=""
    />
    </div>


    <!-- !! HEADER/SHOWCASE -->
    <header class="video-header" id="home">
      <div class="fullscreen-video-wrap">
        <video src="https://codehard.cz/img/video3.mp4" autoplay muted loop></video>
      </div>

      <div class="header-content">
        <h1 class="header__heading--primary" id="heading--primary">
          Code hard
        </h1>
        <h2 id="heading--secondary">
          <span
            class="txt-type header__heading--secondary"
            data-wait="3000"
            data-words='["... and have fun ;)"]'
          ></span>
        </h2>
      </div>
      <svg
        class="shape-bottom"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#f2f2f2"
          fill-opacity="1"
          d="M0,288L40,266.7C80,245,160,203,240,170.7C320,139,400,117,480,117.3C560,117,640,139,720,170.7C800,203,880,245,960,250.7C1040,256,1120,224,1200,192C1280,160,1360,128,1400,112L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>

    <?php
    
    if(!array_key_exists("preferredLanguage", $_COOKIE)) {

    ?>

      <div id="cookie-message" class='cookie-message'><?php if ($currentLang === 'CZ') { echo 'Tato stránka používá cookies. Vlastně jen jedno malé cookie, které ukládá Vámi preferovaný jazyk. Takže se nebojte, klikněte na OK a pusťte se do prohlížení ;)';} else {echo 'This site uses cookies. In fact, just one tiny cookie that stores your preferred language. So don\'t worry, click OK and start browsing ;)';}
              ?><button class="btn btn--close-cookie">OK</button></div>

    <?php 
    }
    
    ?>

    </header>

    <?php 
    
    include_once $currentLang.'.html';    

    ?>



    <!-- !! FOOTER -->
    <footer class="footer text text-light">
      Copyright &copy; 2020 Honza Hrbacek
    </footer>
    
    
  </body>
</html>
