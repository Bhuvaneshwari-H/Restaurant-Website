@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&display=swap');

:root{
    --green:#27ae60;
    --dark-color:#219150;
    --black:#444;
    --light-color:#666;
    --border:.1rem solid rgba(0,0,0,.1);
    --border-hover:.1rem solid var(--black);
    --box-shadow:0 .5rem 1rem rgba(0,0,0,.1);
}

*{
    font-family: 'Poppins', sans-serif;
    margin:0; padding:0;
    box-sizing: border-box;
    outline: none; border:none;
    text-decoration: none;
    text-transform: capitalize;
    transition:all .2s linear;
    transition:width none;
}

html{
    font-size: 62.5%;
    overflow-x: hidden;
    scroll-padding-top: 5rem;
    scroll-behavior: smooth;
}

html::-webkit-scrollbar{
    width:1rem;
}

html::-webkit-scrollbar-track{
    background:transparent;
}

html::-webkit-scrollbar-thumb{
    background:var(--black);
}

section{
    padding:5rem 9%;
}

.heading{
    text-align: center;
    margin-bottom: 2rem;
    position: relative;
}

.heading::before{
    content: '';
    position: absolute;
    top:50%; left:0;
    transform: translateY(-50%);
    width: 100%;
    height:.01rem;
    background: rgba(0,0,0,.1);
    z-index: -1;
}

.heading span{
    font-size: 3rem;
    padding:.5rem 2rem;
    color:var(--black);
    background: #fff;
    border:var(--border);
}

.btn{
    margin-top: 1rem;
    display:inline-block;
    padding:.9rem 3rem;
    border-radius: .5rem;
    color:#fff;
    background:var(--green);
    font-size: 1.7rem;
    cursor: pointer;
    font-weight: 500;
}

.btn:hover{
    background:var(--dark-color);
}

.header .header-1{
    background:#fff;
    padding:1.5rem 9%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header .header-1 .logo{
    font-size: 2.5rem;
    font-weight: bolder;
    color:var(--black);
}


.header .header-1 .search-form{
	 width:50rem;
    height:5rem;
    border:var(--border);
    overflow: hidden;
    background:#fff;
    display:flex;
    align-items: center;
    border-radius: .5rem;
}

.header .header-1 .search-form input{
    font-size: 1.6rem;
    padding:0 1.2rem;
    height:100%;
    width:100%;
    text-transform: none;
    color:var(--black);
}

.header .header-1 .search-form label{
    font-size: 2.5rem;
    padding-right: 1.5rem;
    color:var(--black);
    cursor: pointer;
}

.header .header-1 .search-form label:hover{
    color:var(--green);
}

.header .header-1 .icons div,
.header .header-1 .icons a{
    font-size: 2.5rem;
    margin-left: 1.5rem;
    color:var(--black);
    cursor: pointer;
}

.header .header-1 .icons div:hover,
.header .header-1 .icons a:hover{
    color:var(--green);
}

#search-btn{
    display: none;
}

.header .header-2{
    background:var(--green);
}

.header .header-2 .navbar{
    text-align: center;
}

.header .header-2 .navbar a{
    color:#fff;
    display: inline-block;
    padding:1.2rem;
    font-size: 1.7rem;
}

.header .header-2 .navbar a:hover{
    background:var(--dark-color);
}

.header .header-2.active{
    position:fixed;
    top:0; left:0; right:0;
    z-index: 1000;

}

.bottom-navbar{
    text-align: center;
    background:var(--green);
    position: fixed;
    bottom:0; left:0; right:0;
    z-index: 1000;
    display: none;
}

.bottom-navbar a{
    font-size: 2.5rem;
    padding:2rem;
    color:#fff;
}

.bottom-navbar a:hover{
    background:var(--dark-color);
}

.login-form-container{
    display: flex;
    align-items: center;
    justify-content: center;
    background:rgba(255,255,255,.9);
    position:fixed;
    top:0; right:-105%;
    z-index: 10000;
    height:100%;
    width:100%;
}

.login-form-container.active{
    right:0;
}

.login-form-container form{
    background:#fff;
    border:var(--border);
    width:40rem;
    padding:2rem;
    box-shadow: var(--box-shadow);
    border-radius: .5rem;
    margin:2rem;
}

.login-form-container form h3{
    font-size: 2.5rem;
    text-transform: uppercase;
    color:var(--black);
    text-align: center;
}

.login-form-container form span{
    display: block;
    font-size: 1.5rem;
    padding-top: 1rem;
}

.login-form-container form .box{
    width: 100%;
    margin:.7rem 0;
    font-size: 1.6rem;
    border:var(--border);
    border-radius: .5rem;
    padding:1rem 1.2rem;
    color:var(--black);
    text-transform: none;
}

.login-form-container form .btn{
    text-align: center;
    width:100%;
    margin:1.5rem 0;
}



.home{
    background: url(../image/banner-bg.jpg) no-repeat;
    background-size: cover;
    background-position: center;
}

.home .row{
    display:flex;
    align-items: center;
    flex-wrap: wrap;
    gap:1.5rem;
}

.home .row .books-slider a img{
    height: 25rem;
	margin:30px;
}

.home .row .books-slider a:hover img{
    transform: scale(.9);
}

.home .row .content h3{
    color:var(--black);
    font-size: 4.5rem;
}









.swiper-button-next,
.swiper-button-prev{
    border:var(--border-hover);
    height:4rem;
    width:4rem;
    color:var(--black);
    background: #fff;
}

.swiper-button-next::after,
.swiper-button-prev::after{
    font-size: 2rem;
}

.swiper-button-next:hover,
.swiper-button-prev:hover{
    background: var(--black);
    color:#fff;
}


.arrivals .arrivals-slider .box{
    display: flex;
    align-items:center;
    gap:1.5rem;
    padding:2rem 1rem;
    border:var(--border);
    margin:1rem 0;
}

.arrivals .arrivals-slider .box:hover{
    border:var(--border-hover);
}

.arrivals .arrivals-slider .box .image img{
    height:15rem;
}






.footer .box-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap:1.5rem;
}

.footer .box-container .box h3{
    font-size: 2.2rem;
    color:var(--black);
    padding:1rem 0;
}

.footer .box-container .box a{
    display: block;
    font-size: 1.4rem;
    color:var(--light-color);
    padding:1rem 0;
}

.footer .box-container .box a i{
    color:var(--green);
    padding-right: .5rem;
}

.footer .box-container .box a:hover i{
    padding-right: 2rem;
}



.footer .share{
    padding:1rem 0;
    text-align: center;
}

.footer .share a{
    height: 5rem;
    width: 5rem;
    line-height: 5rem;
    font-size: 2rem;
    color:#fff;
    background:var(--green);
    margin:0 .3rem;
    border-radius: 50%; 
}

.footer .share a:hover{
    background:var(--black);
}







