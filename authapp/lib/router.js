Router.configure({
	layoutTemplate: 'form_layout'
});

Router.map(function(){
	// Login-Home
	this.route('login', {
		path: '/',
		template: 'login'
	});
	// Register
	this.route('signup')

})


/*
Router.route('/', {
  name: 'login',
});
*/