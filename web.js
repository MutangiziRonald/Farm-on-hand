var icons=document.querySelectorAll('.footer .fa');
const remove=()=>{
  
}
icons.forEach(icon=>{
  icon.addEventListener('click',()=>{
    icons.forEach(ico=>ico.classList.remove('active'))
    icon.classList.add('active');
  })
  
})
const paths=['seedlings.jpg','maize.jpg','maize-harvesting.jpg','machinery.jpg','carbage.jpg']
var body=document.querySelector('body');
var box=document.querySelector('.container2');

var i=-1;
const int=setInterval(()=>{
    i++
    box.style.background= `url(/bootstrap-5.0.2-examples/website/${paths[i]}) `
    body.style.background= `url( ${paths[i]}) `
    body.style.backgroundSize='cover';
        box.style.backgroundSize='cover';
    box.style.backgroundPosition='center';


    const text=document.querySelector('.img-text')
    text.innerHTML=paths[i].slice(0,paths[i].length-4)
    i===paths.length-1?i=-1:'';
  },8000)
var newsbox=document.querySelector('.news');
console.log(paths[3].slice(0,paths[3].length-4));
fetch('./news.json').then(res=>{
  return res.json();
}).then((data)=>{
  
  var newss= data.news;
  newss.map(news=>{
    var maindiv=document.createElement('div')
    maindiv.className='maindiv'
    maindiv.style.background=`url(${news.image})`
    maindiv.style.backgroundSize='cover'
    var div=document.createElement('div');
    div.className='artical';
    div.style.backgroundColor=news.color
    var title=document.createElement('h3');
    var link =document.createElement('a');
    link.href='#'
    link.innerHTML='continue reading >>';
    title.innerHTML=news.title;
    var p=document.createElement('p');
    p.innerHTML=news.body;
    div.appendChild(title)
    div.appendChild(p)
    div.appendChild(link)
    maindiv.appendChild(div)
    newsbox.appendChild(maindiv);
  })
  
  
  
  var pplelist=document.querySelector('.people');
  var people=data.people;
  people.map(person=>{
    var personbox=document.createElement('div');
    personbox.className='person';
    var name=document.createElement('h6')
    name.innerHTML=person.name
    
    var role=document.createElement('span')
    role.innerHTML=person.role
    var likes=document.createElement('p')
    likes.innerHTML=person.follower+' '+'followers'
    var box=document.createElement('div')
    likes.classList.add('text-info')
    box.className='box'
    box.appendChild(name);
    box.appendChild(role);
    box.appendChild(likes)
    personbox.appendChild(box)
    var image=document.createElement('img');
    image.src='./a.png';
    personbox.appendChild(image);
    pplelist.appendChild(personbox)
  })

}).catch(err=>{
  console.log(err);
})

var sidebar=document.querySelector('.sidebar')
var btn=document.querySelector('.bar')
btn.addEventListener('click',()=>{
  btn.classList.toggle('fa-times')
  sidebar.classList.toggle('d-none')
  var links=document.querySelectorAll('ul li a')
  links.forEach(link=>{
    link.addEventListener('click',()=>{
      
      btn.classList.toggle('fa-times')
      sidebar.classList.toggle('d-none')
    })
  })
})
var nav=document.querySelector('.nav')

document.addEventListener('scroll',e=>{
  window.scrollY>20?nav.classList.add('bg-dark'):nav.classList.remove('bg-dark')
  
  
})
var toup=document.querySelector('.topup')
document.addEventListener('scroll',(e)=>{
  if (window.scrollY<=100) {
    toup.classList.add('d-none')
    
  } else {
    toup.classList.remove('d-none')
  }
  console.log(e.deltaY);
})