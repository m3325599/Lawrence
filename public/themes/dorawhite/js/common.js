/*! Lawrence - v1.0.9 - 2015-12-25 */
(function(){$(function(){return $(".js-pubu .waterfall-item").hover(function(){return $(this).addClass("cur")},function(){return $(this).removeClass("cur")}),$(document).keyup(function(a){return 13===a.keyCode?$(".js-search").each(function(){return $(this).is(":focus")?window.location.href="/content/searchResult/items?searchKey="+$(this).val():void 0}):void 0}),$(".js-search").siblings(".btn").click(function(){return window.location.href="/content/searchResult/items?searchKey="+$(this).siblings(".js-search").val()})})}).call(this);
//# sourceMappingURL=common.js.map