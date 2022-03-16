import { Meteor } from "meteor/meteor";
import { Random } from "meteor/random";
import { TasksCollection } from "../db/TasksCollection";

if (Meteor.isServer) {
  describe("Task", () => {
    describe("methods", () => {
      const ueserId = Random.id();
      let taskId;

      beforeEach(() => {
        TasksCollection.remove({});
        taskId = TasksCollection.insert({
          text: "Test Task",
          createdAt: new Date(),
          userId,
        });
      });
    });
  });
}
