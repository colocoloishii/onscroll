// whe the user scroll up/down, it's gonna run the function.
window.addEventListener('scroll', () => {

    const scrollable = document.documentElement.scrollHeight - window.innerHeight; 
    //Element.scrollHeight = あふれて画面上に表示されない部分を含めた、要素の中身の高さの寸法。
    //window.innerHeight = viewpoint の高さ。
    //console.log(scrollable); // 535

    // get the number how much the user scrolled.
    const scrolled = window.scrollY; //the amounts the user scrolled down.
    
    const $wrapper = document.getElementById('wrapper');
    // console.log('$wrapper', $wrapper);
    if(Math.ceil(scrolled) === 988) { //切り上げ = Math.ceil(対象となる数値)
        // alert('You\'ve reached the bottom!');
        // console.log('we are the bottom');
        $wrapper.style.backgroundColor = 'pink';
    }
});