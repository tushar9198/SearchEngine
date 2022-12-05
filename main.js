document.querySelector('.btn').addEventListener('click' , () => {
    var search = document.querySelector('.search');
    if(search.value.length=="") {
      search.focus();
      search.style.borderColor="red"
    }else {
        location.href = "https://www.google.com/search?q=" + search.value + "&source=hp&ei=qLwvY4vqJJH14-EP0PO26AI&oq=hello&gs_lcp=ChFtb2JpbGUtZ3dzLXdpei1ocBADMggIABCABBCxAzILCC4QgAQQsQMQ1AIyCAguEIAEELEDMg4ILhCABBCxAxCDARDUAjILCAAQgAQQsQMQgwEyCwgAEIAEELEDEIMBMggILhCABBDUAjIICC4QgAQQsQM6CAgAEI8BEOoCOgoIABCPARDqAhAKOgUIABCABDoKCAAQsQMQgwEQCjoQCAAQgAQQsQMQgwEQAhCfAToLCAAQgAQQsQMQyQNQnhZYgh9g5SRoAXAAeAGAAc4FiAGdEZIBBzQtMS4yLjGYAQCgAQGwAQ8&sclient=mobile-gws-wiz-hp";
        search.value.length=""
    }
});




var search = document.querySelector('.search');
search.addEventListener('input' , () => {
    if(search.value.length > 0) {
        search.style.borderColor = "#4fbe97"
    }else {
        search.style.borderColor = "grey"
    }
});
