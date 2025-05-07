"use strict"

import { headerMove } from "../index.js";

gsap.registerPlugin(ScrollTrigger);

export default ()=>{

    /* new Swiper('._main .section02 .flex .left', {
        speed: 2400,
        spaceBetween: 36,
        loop : true,
        // slidesPerView: 2.8,
        slidesPerView: 'auto',
        direction : 'horizontal',
        autoplay: {
            delay: 0,
            pauseOnMouseEnter : true
        },
        breakpoints : {
            821: {
                direction : 'vertical',
                spaceBetween: 36,
            }
        }
    });

    new Swiper('._main .section02 .flex .right', {
        speed: 2400,
        spaceBetween: 36,
        loop : true,
        // slidesPerView: 2.8,
        slidesPerView: 'auto',
        direction : 'horizontal',
        autoplay: {
            delay: 0,
            reverseDirection: true,
            pauseOnMouseEnter : true
        },
        breakpoints : {
            821: {
                direction : 'vertical',
                spaceBetween: 36,
            }
        }
    }); */

    gsap.set('.cursor-point',{
        opacity : 0,
    });

    ScrollTrigger.create({
        trigger : "._main .section02",
        // markers : true,
        start : "top top",
        invalidateOnRefresh : true,
        onEnter : ()=>{
            $('.header').addClass("on");
            $('.header').removeClass("hide");
            $(window).off('scroll',headerMove);
        },
        onLeaveBack : ()=>{
            $('.header').removeClass("on");
            $(window).on('scroll',headerMove);
        }
    });

    ScrollTrigger.create({
        trigger : "._main .section02",
        // markers : true,
        start : "top center",
        onEnter : ()=>{
            gsap.to('.cursor-point',{
                opacity : 1,
            });
        },
        onLeaveBack : ()=>{
            gsap.to('.cursor-point',{
                opacity : 0,
            });
        }
    });

    const mm = gsap.matchMedia();

    mm.add({
        min1281 : "(min-width: 1281px)",
        min1025 : "(min-width: 1025px)",
        min821 : "(min-width: 821px)",
        min481 : "(min-width: 481px)",
        max480 : "(max-width: 480px)"
    },(context)=>{

        const {min1281,min1025,min821,min481,max480} = context.conditions;

        gsap.timeline({
            scrollTrigger : {
                trigger : "._main .section02",
                start : "top center",
                // markers : true,
                invalidateOnRefresh : true,
            }
        })
        .fromTo('._main .section02 .tbx h1',{
            yPercent : 50,
            opacity : 0
        },{
            yPercent : 0,
            opacity : 1,
        },'a')
        .fromTo('._main .section02 .tbx h1',{
            fontSize : ()=>{
                if(min1281){
                    return 82
                }else if(min1025){
                    return 72;
                }else if(min821){
                    return 62;
                }else if(min481){
                    return 62;
                }else if(max480){
                    return 52;
                }
            }
        },{
            fontSize : ()=>{
                if(min1281){
                    return 52;
                }else if(min1025){
                    return 42;
                }else if(min821){
                    return 32;
                }else if(min481){
                    return 42;
                }else if(max480){
                    return 32;
                }
            }
        },'a')
        .fromTo('._main .section02 .tbx a',{
            marginTop : "-50%",
        },{
            marginTop : '1.7777777778em',
        })
        .fromTo('._main .section02 .tbx a',{
            opacity : 0,
        },{
            opacity : 1,
        })
        .fromTo('._main .section02 .flex .left',{
            opacity : 0
        },{
            opacity : 1
        },'b')
        .fromTo('._main .section02 .flex .right',{
            opacity : 0
        },{
            opacity : 1
        },'b');

    });


    $('._main .section02 .tbx a').mouseover(function(){
        
        gsap.to('.cursor-point',{
            opacity : 0,
        });

    });

    $('._main .section02 .tbx a').mouseleave(function(){
        
        gsap.to('.cursor-point',{
            opacity : 1,
        });

    });

}




/* 
    const mm = gsap.matchMedia();

    mm.add({
        min1281 : "(min-width: 1281px)",
        min1025 : "(min-width: 1025px)",
        min821 : "(min-width: 821px)",
        min481 : "(min-width: 481px)",
        max480 : "(max-width: 480px)"
    },(context)=>{

        const {min1281,min1025,min821,min481,max480} = context.conditions;

        gsap.fromTo('._main .section02 .tbx h1',{
            yPercent : 50,
            opacity : 0
        },{
            yPercent : 0,
            opacity : 1,
            scrollTrigger : {
                trigger : "._main .section02",
                start : "top top+=25%",
            }
        })

        gsap.timeline({
            scrollTrigger : {
                trigger : "._main .section02",
                // markers : true,
                pin : true,
                scrub : 1,
                end : "+=500%",
                invalidateOnRefresh : true,
            }
        })
        .fromTo('._main .section02 .tbx h1',{
            fontSize : ()=>{
                if(min1281){
                    return 82
                }else if(min1025){
                    return 72;
                }else if(min821){
                    return 62;
                }else if(min481){
                    return 62;
                }else if(max480){
                    return 52;
                }
            }
        },{
            fontSize : ()=>{
                if(min1281){
                    return 52;
                }else if(min1025){
                    return 42;
                }else if(min821){
                    return 32;
                }else if(min481){
                    return 42;
                }else if(max480){
                    return 32;
                }
            }
        })
        .fromTo('._main .section02 .tbx a',{
            marginTop : "-50%",
        },{
            marginTop : '1.7777777778em',
        })
        .fromTo('._main .section02 .tbx a',{
            opacity : 0,
        },{
            opacity : 1,
        })
        .fromTo('._main .section02 .flex .grid.left',{
            x : ()=>{
                if(min821) return 0;
                // return document.querySelector('._main .section02 .grid.left').scrollWidth;
                // min821 ? 0 : 100
                return document.querySelector('._main .section02 .grid.left').scrollWidth;
                // return document.querySelector('._main .section02 .grid.left').scrollWidth + window.innerWidth;
            },
            y : ()=>{
                if(min821){
                    return document.querySelector('._main .section02 .grid.left').scrollHeight + window.innerHeight;
                }
                return 0;
                // yPercent : min821 ? 100 : 0
            }
        },{
            x : ()=>{
                if(min821) return 0;
                return -(document.querySelector('._main .section02 .grid.left').scrollWidth - window.innerWidth/1.5);
                // min821 ? 0 : -50
            },
            y : ()=>{
                if(min821){
                    // -(document.querySelector('._main .section02 .grid.left').scrollHeight - (window.innerHeight/2));
                    return -(document.querySelector('._main .section02 .grid.left').scrollHeight - (window.innerHeight/2))
                }
                return 0;
                // min821 ? -50 : 0
            },
            duration : 3,
        },'a')
        .fromTo('._main .section02 .flex .grid.right',{
            x : ()=>{
                if(min821) return 0;
                // return -document.querySelector('._main .section02 .grid:not(.left)').scrollWidth;
                // min821 ? 0 : -100
                return -(document.querySelector('._main .section02 .grid.right').scrollWidth + window.innerWidth);
            },
            y : ()=>{
                if(min821) {
                    return -(document.querySelector('._main .section02 .grid.right').scrollHeight + window.innerHeight);
                }
                return 0;
                // yPercent : min821 ? -100 : 0
            }
        },{
            x : ()=>{
                if(min821) return 0;
                return window.innerWidth/2.5;
                // min821 ? 0 : -50
            },
            y : ()=>{
                if(min821){
                    // (document.querySelector('._main .section02 .grid.right').scrollHeight)
                    return window.innerHeight/2;
                }
                return 0;
                // yPercent : min821 ? 50 : 0,
            },
            duration : 3,
        },'a');

    }) 
*/
