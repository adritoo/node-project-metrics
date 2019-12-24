import { UsersHandler, User} from '../users'

const dbUs: UsersHandler = new UsersHandler('./db/users')
// describe contains the function which hold the test 
//it , takes 2 parameters , the first one is the name of the test , the second is the fonction which hold the body of the test 

describe("User", function() {                  
    describe("#save()", function() {
        it("should save without error", function(done) {
            const user = new User("Bob", "bob@gmail.com", "1234");
            dbUs.save(user, (err) => {
                if (err) done(err);
                else done();
            });
        });
    });
});

describe("#get()", function() {
    it("should get without error", function(done) {
        dbUs.get("Sergei", (err) => {
            if (err) done(err);
            else done();
        });
    });
    it("should return an error", function(done) {
        dbUs.get("SERGAI", (err) => {
            if (err) done();
            else done(err);
        });
    });
});