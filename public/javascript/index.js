
let moduleList;
let moduleName;
let moduleDetail;

moduleName = document.getElementsByTagName('a');
moduleList = document.getElementsByClassName('module-list')[0];
moduleDetail = document.getElementsByClassName('module-detail')[0];
moduleList.addEventListener('click', function(event){
  event.preventDefault();
  moduleDetail.innerHTML = event.target.innerHTML;
});
