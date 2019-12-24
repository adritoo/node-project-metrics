import { UsersHandler, User} from '../users'

const dbUs: UsersHandler = new UsersHandler('./db/users')

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