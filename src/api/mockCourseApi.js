import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [{
        id: "vide-number-1",
        title: "Vide number 1",
        watchHref: "http://youtube.com",
        authorId: "jon-doe",
        length: "3:15",
        category: "Video"
    },
    {
        id: "video-number-2",
        title: "Video number 2",
        watchHref: "http://www.yahoo.com",
        authorId: "jon-doe",
        length: "3:16",
        category: "News & Search"
    },
    {
        id: "video-number-3",
        title: "Video number 3",
        watchHref: "http://www.google.com",
        authorId: "jon-doe",
        length: "4:52",
        category: "Search"
    },
    {
        id: "video-number-4",
        title: "Video number 4",
        watchHref: "http://www.cnn.com",
        authorId: "jon-doe",
        length: "4:30",
        category: "News"
    },
    {
        id: "video-number-5",
        title: "Video number 5",
        watchHref: "http://www.facebook.com",
        authorId: "jon-doe",
        length: "2:10",
        category: "Social"
    }
];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
    return replaceAll(course.title, ' ', '-');
};

class CourseApi {
    static getAllCourses() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], courses));
            }, delay);
        });
    }

    static saveCourse(course) {
        course = Object.assign({}, course); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minCourseTitleLength = 1;
                if (course.title.length < minCourseTitleLength) {
                    reject(`Title must be at least ${minCourseTitleLength} characters.`);
                }

                if (course.id) {
                    const existingCourseIndex = courses.findIndex(a => a.id == course.id);
                    courses.splice(existingCourseIndex, 1, course);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new courses in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    course.id = generateId(course);
                    course.watchHref = `http://www.yahoo.com/${course.id}`;
                    courses.push(course);
                }

                resolve(course);
            }, delay);
        });
    }

    static deleteCourse(courseId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfCourseToDelete = courses.findIndex(course => {
                    course.courseId == courseId;
                });
                courses.splice(indexOfCourseToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default CourseApi;