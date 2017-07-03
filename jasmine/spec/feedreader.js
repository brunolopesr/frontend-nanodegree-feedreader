/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */

    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URLs are defined and not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            })
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('names are defined and not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            })
        });
    });

    /* This suit is all about the menu of our application. Contains
     * tests if the menu is hidden by default and if the menu button
     * works as expected.
     */
    describe('The menu', function() {
        var body,
            menuIcon;

        beforeEach(function() {
            body = $('body');
            menuIcon = $('.menu-icon-link');
        });

        /* This test ensures the menu element is
         * hidden by default.
         */
        it('is hidden by default', function() {
            var isHidden = $('body').hasClass('menu-hidden');
            expect(isHidden).toBe(true);
        });

        /* This test ensures the menu icon works as
         * expected, by checking if the menu shows and hides
         * after the menu icon button is clicked.
         */
        it('icon button works', function() {
            menuIcon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(false);
            menuIcon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(true);
        })
    });

    /* This suit is all about the initial entries of our application, when
     * the loadFeed function is called for the first time. It contains a test
     * if the .feed container has at least one .entry element.
     */
    describe('Initial Entries', function() {
        var feed;

        beforeEach(function(done) {
            feed = $('.feed');
            loadFeed(0, done);
        });

        /*
         * This test ensures that when the loadFeed function is called
         * and completes its work, there is at least a single .entry element
         * within the .feed container
         */
        it('has at least one entry', function(done) {
            var entries = feed.find('.entry');
            expect(entries.length).toBeGreaterThan(0);
            done();
        });
    });

    /* This suit tests the feed selection feature, checking if the content
     * actually changes after loadFeed completes its work.
     */
    describe('New Feed Selection', function() {
        var firstFeed,
            secondFeed;

        beforeEach(function(done) {
            loadFeed(1, function() {
                firstFeed = $('.feed').find('.entry');
                done();
            });
        });

        it('entries actually changes', function(done) {
            loadFeed(0, function() {
                secondFeed = $('.feed').find('.entry');

                var firstName = $(firstFeed[0]).find('h2').text();
                var secondName = $(secondFeed[0]).find('h2').text();

                expect(firstName).not.toEqual(secondName);
                done();
            });
        })
    })
}());
