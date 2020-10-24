// barba.init({
//   transitions: [{
//     name: 'transition',
//     leave() {
//       gsap.to('.container-timeline', {
//         duration: .5,
//         opacity: 0
//       })
//     },
//     enter() {
//       gsap.from('.timeline-right', {
//         duration: .5,
//         y: '200%',
//         delay: .5,
//       })
//       gsap.from('.timeline-content', {
//         duration: .5,
//         y: '-200%',
//         delay: .5
//       })
//     }
//   }]
// });

// function pageTransition() {
//   var tl = gasp.timeline();

//   tl.to('ul.transition li', {
//     duration: .5,
//     scaleY: 1,
//     transformOrigin: "bottom left",
//     stagger: .2
//   })
//   tl.to('ul.transition li', {
//     duration: .5,
//     scaleY: -1,
//     transformOrigin: "bottom left",
//     stagger: .1,
//     delay: .1
//   })
// }

// function contentAnimation(){
//   var tl = gsap.timeline();

//   tl.form('.left', {duration:1.5, translateY:50, opacity:0})
//   tl.to('img', {clipPath: ""})
// }


function delay(n) {
  n = n || 1000;
  return new Promise(done => {
    setTimeout(() => {
      done();
    }, n);
  });
}

function pageTransition() {
  gsap.to('.timeline-right', {
    duration: .5,
    y: '-300%',
  })
  gsap.to('.timeline-content', {
    duration: .5,
    y: '300%',
  })
}

function enteringAnim() {
  gsap.from('.timeline-right', {
    duration: .5,
    y: '500%',
    delay: .5,
  })
  gsap.from('.timeline-content', {
    duration: .5,
    y: '-500%',
    delay: .5
  })
}

barba.init({
  sync: true,

  transitions: [{
    async leave(data) {
      const done = this.async();

      pageTransition();
      await delay(800);
      done();
    },

    async enter(data) {
      enteringAnim();
    },

    async once(data) {
      enteringAnim();
    },
  }]
})