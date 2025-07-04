let erorr_btn = document.getElementById('erorr');
let warning_btn = document.getElementById('warning');
let sucess_btn = document.getElementById('sucess');
let info_btn = document.getElementById('info');
let box = document.getElementById('box');
const creat =(icon,text,class_name)=>{
    let element = document.createElement('div');
    element.innerHTML = `
            <div class="notification ${class_name} trans">
            <i class="fa-solid fa-circle-xmark"></i>
            <p>${text}</p>
            <i class="fa-solid fa-xmark"></i>
            </div>
    `
    box.appendChild(element);
    setInterval(()=>{
        element.remove();
    },5000)
}
sucess_btn.addEventListener('click',()=>{
    let icon ='fa-solid fa-circle-xmark';
    let text = 'Sucess Message';
    let class_name = 'success';
    creat(icon,text,class_name);
})
erorr_btn.addEventListener('click',()=>{
    let icon ="fa-solid fa-triangle-exclamation";
    let text = 'Error Message';
    let class_name = 'error';
    creat(icon,text,class_name);
})
warning_btn.addEventListener('click',()=>{
    let text = 'Warning Message';
    let icon = "fa-solid fa-circle-exclamation";
    let class_name = 'warning';
    creat(icon,text,class_name);
})
info_btn.addEventListener('click',()=>{
    let text = 'information Message';
    let icon = "fa-solid fa-circle-info";
    let class_name = 'info';
    creat(icon,text,class_name);
})