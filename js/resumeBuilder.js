var bio = {
	"name": "Tommi Leikomaa",
	"role": "Senior Game Developer",
	"contacts": {
		"mobile": "+44 7477 701827",
		"email": "tommi.leikomaa@gmail.com",
		"github": "tommimarkus",
		"twitter": "@TommiMarkus",
		"location": "London, United Kingdom"
	},
	"welcomeMessage": "Moro!",
	"skills": [
		"C++",
		"Leadership"
	],
	"bioPic": "images/me.jpg"
};

bio.display = function() {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

	$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

	$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

	if (bio.skills) {
		$("#header").append(HTMLskillsStart);
		for (i in bio.skills) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
		}
	}
}

var education = {
	"schools": [
		{
			"name": "Oulu University of Applied Sciences",
			"location": "Oulu, Finland",
			"degree": "BSc",
			"majors": [
				"Embedded Software"
			],
			"dates": -1,
			"url": "http://oamk.fi"
		},
		{
			"name": "Tampere University of Applied Sciences",
			"location": "Tampere, Finland",
			"degree": "BBA",
			"majors": [
				"International Business"
			],
			"dates": 2016,
			"url": "http://tamk.fi"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"date": 2016,
			"url": "https://classroom.udacity.com/courses/ud804"
		}
	]
};

education.display = function () {
	for (i = 0; i < education.schools.length; i++) {
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[i].name));
		$(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[i].degree));
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates === -1 ? "dropped out" : education.schools[i].dates));
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
		for (j = 0; j < education.schools[i].majors.length; j++) {
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]));
		}
	}
	if (education.onlineCourses) {
		$("#education").append(HTMLonlineClasses);
		for (i = 0; i < education.onlineCourses.length; i++) {
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title));
			$(".education-entry:last").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school));
			$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].date));
			$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[i].url));
		}
	}
}

var work = {
	"jobs": [
		{
			"employer": "King",
			"title": "Senior Game Developer",
			"location": "London, United Kingdom",
			"dates": "in progress",
			"description": "Mobile Games"
		},
		{
			"employer": "Rovio",
			"title": "Senior Game Programmer",
			"location": "Tampere, Finland",
			"dates": "2011-2014",
			"description": "Mobile Games"
		}
	]
};

work.display = function () {
	for (i = 0; i < work.jobs.length; i++) {
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + HTMLworkTitle.replace("%data%", work.jobs[i].title));
		$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
	}
}

var projects = {
	"projects": [
		{
			"title": "Farm Heroes Saga",
			"dates": 2014,
			"description": "Team Infra!",
			"images": ["images/197x148.gif", "images/197x148.gif"]
		},
		{
			"title": "Angry Birds Rio",
			"dates": 2012,
			"description": "KRAAAAAAA!",
			"images": ["images/197x148.gif"]
		},
		{
			"title": "Amazing Alex",
			"dates": 2011,
			"description": "Amazing!",
			"images": ["images/197x148.gif"]
		}
	]
};

projects.display = function () {
	for (i = 0; i < projects.projects.length; i++) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
		for (j = 0; j < projects.projects[i].images.length; j++) {
			$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
		}
	}
}


bio.display();
work.display();
projects.display();
education.display();

function inName() {
	var newName = bio.name;
	nameParts = newName.trim().split(" ");
	nameParts[0] = nameParts[0].charAt(0).toUpperCase() + nameParts[0].substr(1).toLowerCase();
	nameParts[1] = nameParts[1].toUpperCase();
	newName = nameParts.join(" ");
	return newName;
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
