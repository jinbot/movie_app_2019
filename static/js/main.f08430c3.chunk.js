(this.webpackJsonpmovie_app_2019=this.webpackJsonpmovie_app_2019||[]).push([[0],{21:function(e,t,a){e.exports=a(48)},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(13),i=a.n(s),o=a(3),c=a.n(o),m=a(14),l=a(15),u=a(16),v=a(19),d=a(17),p=a(20),g=a(18),y=a.n(g),_=a(2),f=a.n(_);a(46);function E(e){var t=e.year,a=e.title,r=e.summary,s=e.poster,i=e.genres;return n.a.createElement("div",{className:"movie"},n.a.createElement("img",{src:s,alt:a,title:a}),n.a.createElement("div",{className:"movie_data"},n.a.createElement("h3",{className:"movie__title"},a),n.a.createElement("h5",{className:"movie__year"},t),n.a.createElement("ul",{className:"movie__gernes"},i.map((function(e,t){return n.a.createElement("li",{key:t},e)}))),n.a.createElement("p",{className:"movie__summary"},r.slice(0,140),"...")))}E.proptype={id:f.a.number.isRequired,title:f.a.string.isRequired,year:f.a.number.isRequired,summary:f.a.string.isRequired,poster:f.a.string.isRequired,genres:f.a.arrayOf(f.a.string).isRequired};var h=E,b=(a(47),function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(v.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={isLording:!0,movies:[]},a.getMovies=Object(m.a)(c.a.mark((function e(){var t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=e.sent,r=t.data.data.movies,console.log(r),a.setState({movies:r,isLording:!1});case 6:case"end":return e.stop()}}),e)}))),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLording,a=e.movies;return n.a.createElement("section",{className:"container"},t?n.a.createElement("div",{className:"loader"},n.a.createElement("span",{className:"loder_text"},"Loading...")):n.a.createElement("div",{className:"movies"},a.map((function(e){return n.a.createElement(h,{key:e.id,id:e.id,title:e.title,year:e.year,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(n.a.Component));i.a.render(n.a.createElement(b,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.f08430c3.chunk.js.map