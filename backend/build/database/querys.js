"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDocument = exports.updateDocument = exports.createDocument = exports.getDocumentsWhere = exports.getDocument = exports.getDocuments = void 0;
const config_1 = require("./config");
// getDocuments is a function that returns all the documents from a collection
const getDocuments = async (collection) => {
    const querySnapshot = await config_1.db.collection(collection).get();
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
exports.getDocuments = getDocuments;
// getDocument is a function that returns a document from a collection
const getDocument = async (collection, documentId) => {
    const docRef = config_1.db.collection(collection).doc(documentId);
    const doc = await docRef.get();
    if (doc.exists) {
        return { id: doc.id, ...doc.data() };
    }
    else {
        throw new Error("No such document!");
    }
};
exports.getDocument = getDocument;
const getDocumentsWhere = async (collection, conditions) => {
    let query = config_1.db.collection(collection);
    conditions.forEach((condition) => {
        query = query.where(condition.field, condition.operator, condition.value);
    });
    const querySnapshot = await query.get();
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
exports.getDocumentsWhere = getDocumentsWhere;
// createDocument is a function that creates a document in a collection
const createDocument = async (collection, data, documentId) => {
    if (documentId) {
        await config_1.db
            .collection(collection)
            .doc(documentId)
            .set({ ...data, updatedAt: new Date(), createdAt: new Date() }); // The field createdAt and updatedAt are added with the server timestamp
        return documentId;
    }
    else {
        const docRef = await config_1.db.collection(collection).add({ ...data, updatedAt: new Date(), createdAt: new Date() }); // The field createdAt and updatedAt are added with the server timestamp
        return docRef.id;
    }
};
exports.createDocument = createDocument;
// updateDocument is a function that updates a document in a collection
const updateDocument = async (collection, documentId, data) => {
    // The field updatedAt is added with the server timestamp
    const docRef = config_1.db.collection(collection).doc(documentId);
    await docRef.update({ ...data, updatedAt: new Date() });
};
exports.updateDocument = updateDocument;
// deleteDocument is a function that deletes a document in a collection
const deleteDocument = async (collection, documentId) => {
    const docRef = config_1.db.collection(collection).doc(documentId);
    await docRef.delete();
};
exports.deleteDocument = deleteDocument;
//# sourceMappingURL=querys.js.map