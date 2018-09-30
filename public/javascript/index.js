let moduleList;
let moduleName;
let moduleDetail;

moduleList = document.querySelectorAll('.module-list');
moduleDetail = document.querySelectorAll('.module-detail');
moduleList[0].addEventListener('click', function(event){
  event.preventDefault();
  moduleDetail[0].innerHTML = event.target.innerHTML;
});
