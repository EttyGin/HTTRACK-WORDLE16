if(!String.prototype.replaceAll){String.prototype.replaceAll=function(str,newStr){if(Object.prototype.toString.call(str).toLowerCase()==='[object regexp]'){return this.replace(str,newStr);}
return this.replace(new RegExp(str,'g'),newStr);};}
function attemptsCounter(){let count=0;return function(){return++count;}}
let attemptsCount=new attemptsCounter();let maxAttempts=5;window.addEventListener('poof',(event)=>{if(getSettings('confetti_mode')==null||getSettings('confetti_mode')==1){poof();}
let targetWord=event.detail.target;let currentGuess=event.detail.currentGuess;let maxGuesses=event.detail.maxGuesses;$('.share-button').each(function(){let target=$(this).data('target');let shareText=window.translations.share.replace('[words]',targetWord.toUpperCase()).replace('[number_try]',currentGuess).replace('[total_try]',maxGuesses).replace('[try]',currentGuess>1?'tries':'try');let url;switch(target){case 'facebook':url='https://www.facebook.com/sharer/sharer.php?u=[source]';break;case 'twitter':url='https://www.twitter.com/share?url=[source]&text=[text]';break;case 'whatsapp':url='https://api.whatsapp.com/send?text=[text]';break;case 'reddit':url='https://www.reddit.com/submit?url=[source]&title=[text]';break;}
if(url===undefined){return}
url=url.replace('[source]',window.location.href);url=url.replace('[text]',shareText);$(this).attr('href',url);});},false);window.addEventListener('updateStats',(event)=>{let statsPlayed=event.detail.statsPlayed;let statsWon=event.detail.statsWon;let statsPercent=event.detail.statsPercent;let statsMaxStreak=event.detail.statsMaxStreak;$('.share-stats-button').each(function(){let target=$(this).data('target');let shareText=window.translations.share_stats.replace('[stats_played]',statsPlayed).replace('[stats_won]',statsWon).replace('[stats_percent]',statsPercent).replace('[stats_max_streak]',statsMaxStreak);let url;switch(target){case 'facebook':url='https://www.facebook.com/sharer/sharer.php?u=[source]';break;case 'twitter':url='https://www.twitter.com/share?url=[source]&text=[text]';break;case 'whatsapp':url='https://api.whatsapp.com/send?text=[text]';break;case 'reddit':url='https://www.reddit.com/submit?url=[source]&title=[text]';break;}
if(url===undefined){return}
url=url.replace('[source]',window.location.href);url=url.replace('[text]',encodeURIComponent(shareText));$(this).attr('href',url);});},false);$(function(){svg4everybody();$('.js-fullscreen').on('click',function(){if($(this).hasClass('active')){$(this).removeClass('active').find('span').text(translations.open_fullscreen);$('.js-section-full').removeClass('fixed')
showScroll()}else{$(this).addClass('active').find('span').text(translations.close_fullscreen);$('.js-section-full').addClass('fixed')
hideScroll()}})
$('.js-gamb').click(function(){$(this).toggleClass('open');$('.js-gamb-hidden').toggleClass('open');if($(this).hasClass('open')){hideScroll();}else{showScroll();}});$(document).on('click touchstart',function(event){if($('.js-gamb').hasClass('open')){if($(event.target).closest(".js-gamb-hidden").length||$(event.target).closest(".js-gamb").length)
return;$('.js-gamb').removeClass('open');$('.js-gamb-hidden').removeClass('open');showScroll();}
event.stopPropagation();});$('.js-gamb-hidden .menu-header__link--dropdown').on('click',function(e){e.preventDefault();$(this).next('.dropdown-menu').slideToggle();});$('.js-scroll').scrollbar();$('.starability-basic input').on('change',function(){$('.starability-basic input').prop('disabled','disabled');var rating=$(this).val();var section=$(this).closest('.starability-basic').attr('data-section');$.ajax({url:'/vote',headers:{'X-CSRF-TOKEN':$('meta[name="csrf-token"]').attr('content')},data:{rating:rating,section:section},type:'post',dataType:'json',success:function(data){if(data.status=='ok'){$('.rate__numbers b').text(data.rating);$('.rate__votes span').text(data.total_votes);}},complete:function(){}})});if(!supportsCssVars()){$('body').addClass('lock')
$('.supports_error').addClass('show')}
$(':root').css('--scroll_width',widthScroll()+'px')
$('body').on('change','input[name="dark_mode"][type="checkbox"]',function(e){e.preventDefault()
if($(this).is(':checked')){$('html').addClass('dark');$('body').addClass('dark-theme');setSettings('theme_mode','night');}else{$('html').removeClass('dark');$('body').removeClass('dark-theme');$('.game_rows').removeClass('dark-theme');setSettings('theme_mode','day');}});if(getSettings('theme_mode')=='night'){setSettings('theme_mode','night');$('input[name="dark_mode"][type="checkbox"]').prop('checked',true);$('html').addClass('dark');$('body').addClass('dark-theme');}
$('body').on('change','input[name="color_blind_mode"][type="checkbox"]',function(e){e.preventDefault()
if($(this).is(':checked')){$('html').addClass('color-blind-mode');setSettings('colorblind_mode',1);}else{$('html').removeClass('color-blind-mode');setSettings('colorblind_mode',0);}});if(getSettings('colorblind_mode')==1){$('input[name="color_blind_mode"][type="checkbox"]').prop('checked',true);}
$('body').on('change','input[name="confetti_mode"][type="checkbox"]',function(e){e.preventDefault()
if($(this).is(':checked')){setSettings('confetti_mode',1);}else{setSettings('confetti_mode',0);}});if(getSettings('confetti_mode')==null||getSettings('confetti_mode')==1){$('input[name="confetti_mode"][type="checkbox"]').prop('checked',true);}
firstClick=false
$('.mini_modal_link').click(function(e){e.preventDefault()
let modalId=$(this).data('modal-id')
$(modalId).find('.js-share_btn').css('display','block');$(modalId).find('.js-share_btn').siblings('.links').css('display','none');if($(this).hasClass('active')){$(this).removeClass('active')
$('.mini_modal').removeClass('active')
$('#game-wrapper').show();firstClick=false
if($(window).width()<1024){$('body').css('cursor','default')}
$('.overlay').fadeOut(200)}else{$('.mini_modal_link').removeClass('active')
$(this).addClass('active')
$('.mini_modal').removeClass('active')
$(modalId).addClass('active')
$('#game-wrapper').hide();firstClick=true
if($(window).width()<1024){$('body').css('cursor','pointer')}
$('.overlay').fadeIn(200)}
$(this).blur();})
$(document).click(function(e){if(!firstClick&&$(e.target).closest('.mini_modal').length==0){if($('.mini_modal_link').hasClass('active')){$('.overlay').fadeOut(200)}
$('.mini_modal, .mini_modal_link').removeClass('active')
$('#game-wrapper').show();if($(window).width()<1024){$('body').css('cursor','default')}}
firstClick=false})
$('body').on('click','.mini_modal .close',function(e){e.preventDefault()
$('.mini_modal, .mini_modal_link').removeClass('active')
$('#game-wrapper').show();if($(window).width()<1024){$('body').css('cursor','default')}
$('.overlay').fadeOut(200)
firstClick=false})
$('body').on('click','.modal_finish .close',function(e){e.preventDefault()
$('.modal_finish').removeClass('active')
if($(window).width()<1024){$('body').css('cursor','default')}})
$('body').on('click','.js-share_btn button',function(e){e.preventDefault()
$(this).parent().hide();$(this).parent().next('.links').fadeIn(300).css('display','flex')})
$('body').on('click','.open_alert',function(e){e.preventDefault()
$('.alert').fadeIn(300,function(){setTimeout(function function_name(argument){$('.alert').fadeOut(300)},650)});});$('.js-gamb-hidden .lang-header__title').on('click',function(e){e.preventDefault();$(this).next('.lang-header__dropdown').slideToggle();});$('body').on('click','.download-screenshot',function(e){e.preventDefault()
if($('html').hasClass('dark')){$('.game_rows').addClass('dark-theme');}else{$('.game_rows').removeClass('dark-theme');}
$('.boards-wrapper').addClass('game_rows-downloading');html2canvas(document.querySelector(".boards-wrapper")).then(canvas=>{$('.boards-wrapper').removeClass('game_rows-downloading');canvas.toBlob(function(blob){saveAs(blob,"sedecordle.png");});});});});var share={open:function(params){let prefix=language.prefix!=''?`/${language.prefix}`:'';let url=`${prefix}/share?${params.join('&')}`;share.popup(url,'Share',840,700);},popup:function(url,title,w,h){var dualScreenLeft=window.screenLeft!=undefined?window.screenLeft:window.screenX;var dualScreenTop=window.screenTop!=undefined?window.screenTop:window.screenY;var width=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width;var height=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height;var systemZoom=width/window.screen.availWidth;var left=(width-w)/2/systemZoom+dualScreenLeft
var top=(height-h)/2/systemZoom+dualScreenTop
var newWindow=window.open(url,title,'menubar=no,toolbar=no, width='+w/systemZoom+', height='+h/systemZoom+', top='+top+', left='+left);if(window.focus)newWindow.focus();}};function getSettings(name){return localStorage.getItem(name);}
function setSettings(name,value){setCookie(name,value,11000);localStorage.setItem(name,value);}
function getCookie(e){var s="(?:; )?"+e+"=([^;]*);?";return!!new RegExp(s).test(document.cookie)&&decodeURIComponent(RegExp.$1)}
function setCookie(name,value,days){var expires="";if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires="; expires="+date.toUTCString();}
document.cookie=name+"="+(value||"")+expires+"; path=/";}
function hideScroll(){var _this=document;_this.body.classList.add('no-scroll');_this.scrollTop=window.pageYOffset;_this.body.style.position='fixed';if(hasScrollbar()){_this.body.style.width='calc(100% - ${getScrollbarSize()}px)';}else{_this.body.style.width='100%';}
_this.body.style.top=-_this.scrollTop+'px';}
function getScrollbarSize(){var outer=document.createElement('div');outer.style.visibility='hidden';outer.style.width='100px';outer.style.msOverflowStyle='scrollbar';document.body.appendChild(outer);var widthNoScroll=outer.offsetWidth;outer.style.overflow='scroll';var inner=document.createElement('div');inner.style.width='100%';outer.appendChild(inner);var widthWithScroll=inner.offsetWidth;outer.parentNode.removeChild(outer);return widthNoScroll-widthWithScroll;}
function hasScrollbar(){return document.body.scrollHeight>document.body.clientHeight;}
function showScroll(){var _this=document;_this.body.classList.remove('no-scroll');_this.body.style.position='';_this.body.style.width='';_this.body.style.top='';window.scroll(0,_this.scrollTop);}
function widthScroll(){let div=document.createElement('div')
div.style.overflowY='scroll'
div.style.width='50px'
div.style.height='50px'
div.style.visibility='hidden'
document.body.appendChild(div)
let scrollWidth=div.offsetWidth-div.clientWidth
document.body.removeChild(div)
return scrollWidth}
var supportsCssVars=function(){var s=document.createElement('style'),support
s.innerHTML=":root { --tmp-var: bold; }"
document.head.appendChild(s)
support=!!(window.CSS&&window.CSS.supports&&window.CSS.supports('font-weight','var(--tmp-var)'))
s.parentNode.removeChild(s)
return support}
function isNumberKey(evt){var charCode=(evt.which)?evt.which:event.keyCode
if(charCode>31&&(charCode<48||charCode>57)&&(charCode<96||charCode>105))return false;return true;}
function ordinal_suffix_of(i){var j=i%10,k=i%100;if(j==1&&k!=11){return i+"st";}
if(j==2&&k!=12){return i+"nd";}
if(j==3&&k!=13){return i+"rd";}
return i+"th";}