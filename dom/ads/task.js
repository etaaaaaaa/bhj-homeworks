const allSpans = document.querySelectorAll('.rotator__case');
const spansArray = Array.from(allSpans);

setInterval(function() {

    const activeSpan = (span) => span.classList.contains('rotator__case_active');
    let activeSpanIndex = spansArray.findIndex(activeSpan);

    spansArray[activeSpanIndex].classList.remove('rotator__case_active');
    (activeSpanIndex < spansArray.length - 1) ? activeSpanIndex++ : activeSpanIndex = 0;
    spansArray[activeSpanIndex].classList.add('rotator__case_active');
}, 1000)