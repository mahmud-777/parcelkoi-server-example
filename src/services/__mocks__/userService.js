export const getAllUsers = async () => {
    // const User =  models.User;
    // const users = await User.find();
    const users = [{
        '_id' : '1', 'username': "test001"
    }];
    return users;
}

export const saveUser = async (user) => {
    const model = new models.User(user);

    const savedUser = await model.save();
    return savedUser;
};