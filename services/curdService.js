export const create = async (Model, data) => {
    try {
        const newItem = new Model(data);
        return await newItem.save();
    } catch (error) {
        throw new Error(`Error creating item: ${error.message}`);
    }
};

export const getAll = async (Model, filter = {}) => {
    try {
        return await Model.find(filter);
    } catch (error) {
        throw new Error(`Error fetching items: ${error.message}`);
    }
};

export const getByField = async (Model, field, value) => {
    try {
        const query = {};
        query[field] = value;
        return await Model.find(query);
    } catch (error) {
        throw new Error(`Error fetching item by ${field}: ${error.message}`);
    }
};

export const getById = async (Model, id) => {
    try {
        return await Model.findById(id);
    } catch (error) {
        throw new Error(`Error fetching item by ID: ${error.message}`);
    }
};

export const updateById = async (Model, id, updateData) => {
    try {
        return await Model.findByIdAndUpdate(id, updateData, { new: true });
    } catch (error) {
        throw new Error(`Error updating item: ${error.message}`);
    }
};

export const deleteById = async (Model, id) => {
    try {
        return await Model.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(`Error deleting item: ${error.message}`);
    }
};
