/*! clndr.min.js v1.4.7 2016-11-26 */
!function(a){"function"==typeof define&&define.amd?define(["jquery","moment"],a):"object"==typeof exports?a(require("jquery"),require("moment")):a(jQuery,moment)}(function(a,b){function c(c,e){var g,h,i;this.element=c,this.options=a.extend(!0,{},f,e),this.options.moment&&(b=this.options.moment),this.constraints={next:!0,today:!0,previous:!0,nextYear:!0,previousYear:!0},this.options.events.length&&(this.options.multiDayEvents?this.options.events=this.addMultiDayMomentObjectsToEvents(this.options.events):this.options.events=this.addMomentObjectToEvents(this.options.events)),this.options.lengthOfTime.months||this.options.lengthOfTime.days?this.options.lengthOfTime.months?(this.options.lengthOfTime.days=null,this.options.lengthOfTime.startDate?this.intervalStart=b(this.options.lengthOfTime.startDate).startOf("month"):this.options.startWithMonth?this.intervalStart=b(this.options.startWithMonth).startOf("month"):this.intervalStart=b().startOf("month"),this.intervalEnd=b(this.intervalStart).add(this.options.lengthOfTime.months,"months").subtract(1,"days"),this.month=this.intervalStart.clone()):this.options.lengthOfTime.days&&(this.options.lengthOfTime.startDate?this.intervalStart=b(this.options.lengthOfTime.startDate).startOf("day"):this.intervalStart=b().weekday(0).startOf("day"),this.intervalEnd=b(this.intervalStart).add(this.options.lengthOfTime.days-1,"days").endOf("day"),this.month=this.intervalStart.clone()):(this.month=b().startOf("month"),this.intervalStart=b(this.month),this.intervalEnd=b(this.month).endOf("month")),this.options.startWithMonth&&(this.month=b(this.options.startWithMonth).startOf("month"),this.intervalStart=b(this.month),this.intervalEnd=this.options.lengthOfTime.days?b(this.month).add(this.options.lengthOfTime.days-1,"days").endOf("day"):b(this.month).endOf("month")),this.options.constraints&&(this.options.constraints.startDate&&(i=b(this.options.constraints.startDate),this.options.lengthOfTime.days?(this.intervalStart.isBefore(i,"week")&&(this.intervalStart=i.startOf("week")),g=this.intervalStart.diff(this.intervalEnd,"days"),(g<this.options.lengthOfTime.days||this.intervalEnd.isBefore(this.intervalStart))&&(this.intervalEnd=b(this.intervalStart).add(this.options.lengthOfTime.days-1,"days").endOf("day"),this.month=this.intervalStart.clone())):(this.intervalStart.isBefore(i,"month")&&(this.intervalStart.set("month",i.month()).set("year",i.year()),this.month.set("month",i.month()).set("year",i.year())),this.intervalEnd.isBefore(i,"month")&&this.intervalEnd.set("month",i.month()).set("year",i.year()))),this.options.constraints.endDate&&(h=b(this.options.constraints.endDate),this.options.lengthOfTime.days?this.intervalStart.isAfter(h,"week")&&(this.intervalStart=b(h).endOf("week").subtract(this.options.lengthOfTime.days-1,"days").startOf("day"),this.intervalEnd=b(h).endOf("week"),this.month=this.intervalStart.clone()):(this.intervalEnd.isAfter(h,"month")&&(this.intervalEnd.set("month",h.month()).set("year",h.year()),this.month.set("month",h.month()).set("year",h.year())),this.intervalStart.isAfter(h,"month")&&this.intervalStart.set("month",h.month()).set("year",h.year())))),this._defaults=f,this._name=d,this.init()}var d="clndr",e="<div class='clndr-controls'><div class='clndr-control-button'><span class='clndr-previous-button'>previous</span></div><div class='month'><%= month %> <%= year %></div><div class='clndr-control-button rightalign'><span class='clndr-next-button'>next</span></div></div><table class='clndr-table' border='0' cellspacing='0' cellpadding='0'><thead><tr class='header-days'><% for(var i = 0; i < daysOfTheWeek.length; i++) { %><td class='header-day'><%= daysOfTheWeek[i] %></td><% } %></tr></thead><tbody><% for(var i = 0; i < numberOfRows; i++){ %><tr><% for(var j = 0; j < 7; j++){ %><% var d = j + i * 7; %><td class='<%= days[d].classes %>'><div class='day-contents'><%= days[d].day %></div></td><% } %></tr><% } %></tbody></table>",f={events:[],ready:null,extras:null,render:null,moment:null,weekOffset:0,constraints:null,forceSixRows:null,selectedDate:null,doneRendering:null,daysOfTheWeek:null,multiDayEvents:null,startWithMonth:null,dateParameter:"date",template:e,showAdjacentMonths:!0,trackSelectedDate:!1,adjacentDaysChangeMonth:!1,ignoreInactiveDaysInSelection:null,lengthOfTime:{days:null,interval:1,months:null},clickEvents:{click:null,today:null,nextYear:null,nextMonth:null,nextInterval:null,previousYear:null,onYearChange:null,previousMonth:null,onMonthChange:null,previousInterval:null,onIntervalChange:null},targets:{day:"day",empty:"empty",nextButton:"clndr-next-button",todayButton:"clndr-today-button",previousButton:"clndr-previous-button",nextYearButton:"clndr-next-year-button",previousYearButton:"clndr-previous-year-button"},classes:{past:"past",today:"today",event:"event",inactive:"inactive",selected:"selected",lastMonth:"last-month",nextMonth:"next-month",adjacentMonth:"adjacent-month"}};c.prototype.init=function(){if(this.daysOfTheWeek=this.options.daysOfTheWeek||[],!this.options.daysOfTheWeek){this.daysOfTheWeek=[];for(var c=0;7>c;c++)this.daysOfTheWeek.push(b().weekday(c).format("dd").charAt(0))}if(this.options.weekOffset&&(this.daysOfTheWeek=this.shiftWeekdayLabels(this.options.weekOffset)),!a.isFunction(this.options.render)){if(this.options.render=null,"undefined"==typeof _)throw new Error("Underscore was not found. Please include underscore.js OR provide a custom render function.");this.compiledClndrTemplate=_.template(this.options.template)}a(this.element).html("<div class='clndr'></div>"),this.calendarContainer=a(".clndr",this.element),this.bindEvents(),this.render(),this.options.ready&&this.options.ready.apply(this,[])},c.prototype.shiftWeekdayLabels=function(a){for(var b=this.daysOfTheWeek,c=0;a>c;c++)b.push(b.shift());return b},c.prototype.createDaysObject=function(c,d){var e,f,g,h,i,j,k=[],l=c.clone();d.diff(c,"days");if(this._currentIntervalStart=c.clone(),this.eventsLastMonth=[],this.eventsNextMonth=[],this.eventsThisInterval=[],this.options.events.length&&(this.eventsThisInterval=a(this.options.events).filter(function(){var a=this._clndrStartDateObject.isAfter(d),b=this._clndrEndDateObject.isBefore(c);return b||a?!1:!0}).toArray(),this.options.showAdjacentMonths&&(e=c.clone().subtract(1,"months").startOf("month"),f=e.clone().endOf("month"),g=d.clone().add(1,"months").startOf("month"),h=g.clone().endOf("month"),this.eventsLastMonth=a(this.options.events).filter(function(){var a=this._clndrEndDateObject.isBefore(e),b=this._clndrStartDateObject.isAfter(f);return a||b?!1:!0}).toArray(),this.eventsNextMonth=a(this.options.events).filter(function(){var a=this._clndrEndDateObject.isBefore(g),b=this._clndrStartDateObject.isAfter(h);return a||b?!1:!0}).toArray())),!this.options.lengthOfTime.days)if(i=l.weekday()-this.options.weekOffset,0>i&&(i+=7),this.options.showAdjacentMonths)for(var m=1;i>=m;m++){var n=b([c.year(),c.month(),m]).subtract(i,"days");k.push(this.createDayObject(n,this.eventsLastMonth))}else for(var m=0;i>m;m++)k.push(this.calendarDay({classes:this.options.targets.empty+" "+this.options.classes.lastMonth}));for(j=c.clone();j.isBefore(d)||j.isSame(d,"day");)k.push(this.createDayObject(j.clone(),this.eventsThisInterval)),j.add(1,"days");if(!this.options.lengthOfTime.days)for(;k.length%7!==0;)this.options.showAdjacentMonths?k.push(this.createDayObject(j.clone(),this.eventsNextMonth)):k.push(this.calendarDay({classes:this.options.targets.empty+" "+this.options.classes.nextMonth})),j.add(1,"days");if(this.options.forceSixRows&&42!==k.length)for(;k.length<42;)this.options.showAdjacentMonths?(k.push(this.createDayObject(j.clone(),this.eventsNextMonth)),j.add(1,"days")):k.push(this.calendarDay({classes:this.options.targets.empty+" "+this.options.classes.nextMonth}));return k},c.prototype.createDayObject=function(a,c){var d,e,f,g=0,h=b(),i=[],j="",k={isToday:!1,isInactive:!1,isAdjacentMonth:!1};for(!a.isValid()&&a.hasOwnProperty("_d")&&void 0!=a._d&&(a=b(a._d)),g;g<c.length;g++){var l=c[g]._clndrStartDateObject,m=c[g]._clndrEndDateObject;(a.isSame(l,"day")||a.isAfter(l,"day"))&&(a.isSame(m,"day")||a.isBefore(m,"day"))&&i.push(c[g])}return h.format("YYYY-MM-DD")==a.format("YYYY-MM-DD")&&(j+=" "+this.options.classes.today,k.isToday=!0),a.isBefore(h,"day")&&(j+=" "+this.options.classes.past),i.length&&(j+=" "+this.options.classes.event),this.options.lengthOfTime.days||(this._currentIntervalStart.month()>a.month()?(j+=" "+this.options.classes.adjacentMonth,k.isAdjacentMonth=!0,j+=this._currentIntervalStart.year()===a.year()?" "+this.options.classes.lastMonth:" "+this.options.classes.nextMonth):this._currentIntervalStart.month()<a.month()&&(j+=" "+this.options.classes.adjacentMonth,k.isAdjacentMonth=!0,j+=this._currentIntervalStart.year()===a.year()?" "+this.options.classes.nextMonth:" "+this.options.classes.lastMonth)),this.options.constraints&&(e=b(this.options.constraints.endDate),d=b(this.options.constraints.startDate),this.options.constraints.startDate&&a.isBefore(d)&&(j+=" "+this.options.classes.inactive,k.isInactive=!0),this.options.constraints.endDate&&a.isAfter(e)&&(j+=" "+this.options.classes.inactive,k.isInactive=!0)),!a.isValid()&&a.hasOwnProperty("_d")&&void 0!=a._d&&(a=b(a._d)),f=b(this.options.selectedDate),this.options.selectedDate&&a.isSame(f,"day")&&(j+=" "+this.options.classes.selected),j+=" calendar-day-"+a.format("YYYY-MM-DD"),j+=" calendar-dow-"+a.weekday(),this.calendarDay({date:a,day:a.date(),events:i,properties:k,classes:this.options.targets.day+j})},c.prototype.render=function(){var a,c,d,e,f,g={},h=null,i=null,j=this.intervalEnd.clone().add(1,"years"),k=this.intervalStart.clone().subtract(1,"years");if(this.calendarContainer.empty(),this.options.lengthOfTime.days)a=this.createDaysObject(this.intervalStart.clone(),this.intervalEnd.clone()),g={days:a,months:[],year:null,month:null,eventsLastMonth:[],eventsNextMonth:[],eventsThisMonth:[],extras:this.options.extras,daysOfTheWeek:this.daysOfTheWeek,intervalEnd:this.intervalEnd.clone(),numberOfRows:Math.ceil(a.length/7),intervalStart:this.intervalStart.clone(),eventsThisInterval:this.eventsThisInterval};else if(this.options.lengthOfTime.months){for(c=[],f=0,e=[],o=0;o<this.options.lengthOfTime.months;o++){var l=this.intervalStart.clone().add(o,"months"),m=l.clone().endOf("month"),a=this.createDaysObject(l,m);e.push(this.eventsThisInterval),c.push({days:a,month:l})}for(o in c)f+=Math.ceil(c[o].days.length/7);g={days:[],year:null,month:null,months:c,eventsThisMonth:[],numberOfRows:f,extras:this.options.extras,intervalEnd:this.intervalEnd,intervalStart:this.intervalStart,daysOfTheWeek:this.daysOfTheWeek,eventsLastMonth:this.eventsLastMonth,eventsNextMonth:this.eventsNextMonth,eventsThisInterval:e}}else a=this.createDaysObject(this.month.clone().startOf("month"),this.month.clone().endOf("month")),d=this.month,g={days:a,months:[],intervalEnd:null,intervalStart:null,year:this.month.year(),eventsThisInterval:null,extras:this.options.extras,month:this.month.format("MMMM"),daysOfTheWeek:this.daysOfTheWeek,eventsLastMonth:this.eventsLastMonth,eventsNextMonth:this.eventsNextMonth,numberOfRows:Math.ceil(a.length/7),eventsThisMonth:this.eventsThisInterval};if(this.options.render?this.calendarContainer.html(this.options.render.apply(this,[g])):this.calendarContainer.html(this.compiledClndrTemplate(g)),this.options.constraints){for(var n in this.options.targets)n!=this.options.targets.day&&this.element.find("."+this.options.targets[n]).toggleClass(this.options.classes.inactive,!1);for(var o in this.constraints)this.constraints[o]=!0;this.options.constraints.startDate&&(i=b(this.options.constraints.startDate)),this.options.constraints.endDate&&(h=b(this.options.constraints.endDate)),i&&(i.isAfter(this.intervalStart)||i.isSame(this.intervalStart,"day"))&&(this.element.find("."+this.options.targets.previousButton).toggleClass(this.options.classes.inactive,!0),this.constraints.previous=!this.constraints.previous),h&&(h.isBefore(this.intervalEnd)||h.isSame(this.intervalEnd,"day"))&&(this.element.find("."+this.options.targets.nextButton).toggleClass(this.options.classes.inactive,!0),this.constraints.next=!this.constraints.next),i&&i.isAfter(k)&&(this.element.find("."+this.options.targets.previousYearButton).toggleClass(this.options.classes.inactive,!0),this.constraints.previousYear=!this.constraints.previousYear),h&&h.isBefore(j)&&(this.element.find("."+this.options.targets.nextYearButton).toggleClass(this.options.classes.inactive,!0),this.constraints.nextYear=!this.constraints.nextYear),(i&&i.isAfter(b(),"month")||h&&h.isBefore(b(),"month"))&&(this.element.find("."+this.options.targets.today).toggleClass(this.options.classes.inactive,!0),this.constraints.today=!this.constraints.today)}this.options.doneRendering&&this.options.doneRendering.apply(this,[])},c.prototype.bindEvents=function(){var b={},c=this,d=a(this.element),e=this.options.targets,f=c.options.classes,g=this.options.useTouchEvents===!0?"touchstart":"click",h=g+".clndr";d.off(h,"."+e.day).off(h,"."+e.empty).off(h,"."+e.nextButton).off(h,"."+e.todayButton).off(h,"."+e.previousButton).off(h,"."+e.nextYearButton).off(h,"."+e.previousYearButton),d.on(h,"."+e.day,function(b){var e,g=a(b.currentTarget);if(c.options.clickEvents.click&&(e=c.buildTargetObject(b.currentTarget,!0),c.options.clickEvents.click.apply(c,[e])),c.options.adjacentDaysChangeMonth&&(g.is("."+f.lastMonth)?c.backActionWithContext(c):g.is("."+f.nextMonth)&&c.forwardActionWithContext(c)),c.options.trackSelectedDate){if(c.options.ignoreInactiveDaysInSelection&&g.hasClass(f.inactive))return;c.options.selectedDate=c.getTargetDateString(b.currentTarget),d.find("."+f.selected).removeClass(f.selected),g.addClass(f.selected)}}),d.on(h,"."+e.empty,function(b){var d,e=a(b.currentTarget);c.options.clickEvents.click&&(d=c.buildTargetObject(b.currentTarget,!1),c.options.clickEvents.click.apply(c,[d])),c.options.adjacentDaysChangeMonth&&(e.is("."+f.lastMonth)?c.backActionWithContext(c):e.is("."+f.nextMonth)&&c.forwardActionWithContext(c))}),b={context:this},d.on(h,"."+e.todayButton,b,this.todayAction).on(h,"."+e.nextButton,b,this.forwardAction).on(h,"."+e.previousButton,b,this.backAction).on(h,"."+e.nextYearButton,b,this.nextYearAction).on(h,"."+e.previousYearButton,b,this.previousYearAction)},c.prototype.buildTargetObject=function(c,d){var e,f,g={date:null,events:[],element:c};return d&&(e=this.getTargetDateString(c),g.date=e?b(e):null,this.options.events&&(f=this.options.multiDayEvents?function(){var a=g.date.isSame(this._clndrStartDateObject,"day"),b=g.date.isAfter(this._clndrStartDateObject,"day"),c=g.date.isSame(this._clndrEndDateObject,"day"),d=g.date.isBefore(this._clndrEndDateObject,"day");return(a||b)&&(c||d)}:function(){var a=this._clndrStartDateObject.format("YYYY-MM-DD");return a==e},g.events=a.makeArray(a(this.options.events).filter(f)))),g},c.prototype.getTargetDateString=function(a){var b=a.className.indexOf("calendar-day-");return-1!==b?a.className.substring(b+13,b+23):null},c.prototype.triggerEvents=function(a,c){var d,e,f,g,h,i,j,k,l,m=a.options.lengthOfTime,n=a.options.clickEvents,o={end:a.intervalEnd,start:a.intervalStart},p=[b(a.intervalStart),b(a.intervalEnd)],q=[b(a.month)];g=o.start.isAfter(c.start)&&(1==Math.abs(o.start.month()-c.start.month())||11===c.start.month()&&0===o.start.month()),h=o.start.isBefore(c.start)&&(1==Math.abs(c.start.month()-o.start.month())||0===c.start.month()&&11===o.start.month()),i=o.start.month()!==c.start.month()||o.start.year()!==c.start.year(),d=o.start.year()-c.start.year()===1||o.end.year()-c.end.year()===1,e=c.start.year()-o.start.year()===1||c.end.year()-o.end.year()===1,f=o.start.year()!==c.start.year(),m.days||m.months?(j=o.start.isAfter(c.start),k=o.start.isBefore(c.start),l=j||k,j&&n.nextInterval&&n.nextInterval.apply(a,p),k&&n.previousInterval&&n.previousInterval.apply(a,p),l&&n.onIntervalChange&&n.onIntervalChange.apply(a,p)):(g&&n.nextMonth&&n.nextMonth.apply(a,q),h&&n.previousMonth&&n.previousMonth.apply(a,q),i&&n.onMonthChange&&n.onMonthChange.apply(a,q),d&&n.nextYear&&n.nextYear.apply(a,q),e&&n.previousYear&&n.previousYear.apply(a,q),f&&n.onYearChange&&n.onYearChange.apply(a,q))},c.prototype.back=function(b){var c=arguments.length>1?arguments[1]:this,d=c.options.lengthOfTime,e={withCallbacks:!1},f={end:c.intervalEnd.clone(),start:c.intervalStart.clone()};return b=a.extend(!0,{},e,b),c.constraints.previous?(d.days?(c.intervalStart.subtract(d.interval,"days").startOf("day"),c.intervalEnd=c.intervalStart.clone().add(d.days-1,"days").endOf("day"),c.month=c.intervalStart.clone()):(c.intervalStart.subtract(d.interval,"months").startOf("month"),c.intervalEnd=c.intervalStart.clone().add(d.months||d.interval,"months").subtract(1,"days").endOf("month"),c.month=c.intervalStart.clone()),c.render(),b.withCallbacks&&c.triggerEvents(c,f),c):c},c.prototype.backAction=function(a){var b=a.data.context;b.backActionWithContext(b)},c.prototype.backActionWithContext=function(a){a.back({withCallbacks:!0},a)},c.prototype.previous=function(a){return this.back(a)},c.prototype.forward=function(b){var c=arguments.length>1?arguments[1]:this,d=c.options.lengthOfTime,e={withCallbacks:!1},f={end:c.intervalEnd.clone(),start:c.intervalStart.clone()};return b=a.extend(!0,{},e,b),c.constraints.next?(c.options.lengthOfTime.days?(c.intervalStart.add(d.interval,"days").startOf("day"),c.intervalEnd=c.intervalStart.clone().add(d.days-1,"days").endOf("day"),c.month=c.intervalStart.clone()):(c.intervalStart.add(d.interval,"months").startOf("month"),c.intervalEnd=c.intervalStart.clone().add(d.months||d.interval,"months").subtract(1,"days").endOf("month"),c.month=c.intervalStart.clone()),c.render(),b.withCallbacks&&c.triggerEvents(c,f),c):c},c.prototype.forwardAction=function(a){var b=a.data.context;b.forwardActionWithContext(b)},c.prototype.forwardActionWithContext=function(a){a.forward({withCallbacks:!0},a)},c.prototype.next=function(a){return this.forward(a)},c.prototype.previousYear=function(b){var c=arguments.length>1?arguments[1]:this,d={withCallbacks:!1},e={end:c.intervalEnd.clone(),start:c.intervalStart.clone()};return b=a.extend(!0,{},d,b),c.constraints.previousYear?(c.month.subtract(1,"year"),c.intervalStart.subtract(1,"year"),c.intervalEnd.subtract(1,"year"),c.render(),b.withCallbacks&&c.triggerEvents(c,e),c):c},c.prototype.previousYearAction=function(a){var b=a.data.context;b.previousYear({withCallbacks:!0},b)},c.prototype.nextYear=function(b){var c=arguments.length>1?arguments[1]:this,d={withCallbacks:!1},e={end:c.intervalEnd.clone(),start:c.intervalStart.clone()};return b=a.extend(!0,{},d,b),c.constraints.nextYear?(c.month.add(1,"year"),c.intervalStart.add(1,"year"),c.intervalEnd.add(1,"year"),c.render(),b.withCallbacks&&c.triggerEvents(c,e),c):c},c.prototype.nextYearAction=function(a){var b=a.data.context;b.nextYear({withCallbacks:!0},b)},c.prototype.today=function(c){var d=arguments.length>1?arguments[1]:this,e=d.options.lengthOfTime,f={withCallbacks:!1},g={end:d.intervalEnd.clone(),start:d.intervalStart.clone()};c=a.extend(!0,{},f,c),d.month=b().startOf("month"),e.days?(e.startDate?d.intervalStart=b().weekday(e.startDate.weekday()).startOf("day"):d.intervalStart=b().weekday(0).startOf("day"),d.intervalEnd=d.intervalStart.clone().add(e.days-1,"days").endOf("day")):(d.intervalStart=b().startOf("month"),d.intervalEnd=d.intervalStart.clone().add(e.months||e.interval,"months").subtract(1,"days").endOf("month")),d.intervalStart.isSame(g.start)&&d.intervalEnd.isSame(g.end)||d.render(),c.withCallbacks&&(d.options.clickEvents.today&&d.options.clickEvents.today.apply(d,[b(d.month)]),d.triggerEvents(d,g))},c.prototype.todayAction=function(a){var b=a.data.context;b.today({withCallbacks:!0},b)},c.prototype.setMonth=function(a,b){var c=this.options.lengthOfTime,d={end:this.intervalEnd.clone(),start:this.intervalStart.clone()};return c.days||c.months?(console.log("You are using a custom date interval. Use Clndr.setIntervalStart(startDate) instead."),this):(this.month.month(a),this.intervalStart=this.month.clone().startOf("month"),this.intervalEnd=this.intervalStart.clone().endOf("month"),this.render(),b&&b.withCallbacks&&this.triggerEvents(this,d),this)},c.prototype.setYear=function(a,b){var c={end:this.intervalEnd.clone(),start:this.intervalStart.clone()};return this.month.year(a),this.intervalEnd.year(a),this.intervalStart.year(a),this.render(),b&&b.withCallbacks&&this.triggerEvents(this,c),this},c.prototype.setIntervalStart=function(a,c){var d=this.options.lengthOfTime,e={end:this.intervalEnd.clone(),start:this.intervalStart.clone()};return d.days||d.months?(d.days?(this.intervalStart=b(a).startOf("day"),this.intervalEnd=this.intervalStart.clone().add(d-1,"days").endOf("day")):(this.intervalStart=b(a).startOf("month"),this.intervalEnd=this.intervalStart.clone().add(d.months||d.interval,"months").subtract(1,"days").endOf("month")),this.month=this.intervalStart.clone(),this.render(),c&&c.withCallbacks&&this.triggerEvents(this,e),this):(console.log("You are using a custom date interval. Use Clndr.setIntervalStart(startDate) instead."),this)},c.prototype.setEvents=function(a){return this.options.multiDayEvents?this.options.events=this.addMultiDayMomentObjectsToEvents(a):this.options.events=this.addMomentObjectToEvents(a),this.render(),this},c.prototype.addEvents=function(b){var c=arguments.length>1?arguments[1]:!0;return this.options.multiDayEvents?this.options.events=a.merge(this.options.events,this.addMultiDayMomentObjectsToEvents(b)):this.options.events=a.merge(this.options.events,this.addMomentObjectToEvents(b)),c&&this.render(),this},c.prototype.removeEvents=function(a){for(var b=this.options.events.length-1;b>=0;b--)1==a(this.options.events[b])&&this.options.events.splice(b,1);return this.render(),this},c.prototype.addMomentObjectToEvents=function(a){var c=0,d=this;for(c;c<a.length;c++)a[c]._clndrStartDateObject=b(a[c][d.options.dateParameter]),a[c]._clndrEndDateObject=b(a[c][d.options.dateParameter]);return a},c.prototype.addMultiDayMomentObjectsToEvents=function(a){var c=0,d=this,e=d.options.multiDayEvents;for(c;c<a.length;c++){var f=a[c][e.endDate],g=a[c][e.startDate];f||g?(a[c]._clndrEndDateObject=b(f||g),a[c]._clndrStartDateObject=b(g||f)):(a[c]._clndrEndDateObject=b(a[c][e.singleDay]),a[c]._clndrStartDateObject=b(a[c][e.singleDay]))}return a},c.prototype.calendarDay=function(b){var c={day:"",date:null,events:[],classes:this.options.targets.empty};return a.extend({},c,b)},c.prototype.destroy=function(){var b=a(this.calendarContainer);b.parent().data("plugin_clndr",null),this.options=f,b.empty().remove(),this.element=null},a.fn.clndr=function(a){var b;if(this.length>1)throw new Error("CLNDR does not support multiple elements yet. Make sure your clndr selector returns only one element.");if(!this.length)throw new Error("CLNDR cannot be instantiated on an empty selector.");return this.data("plugin_clndr")?this.data("plugin_clndr"):(b=new c(this,a),this.data("plugin_clndr",b),b)}});