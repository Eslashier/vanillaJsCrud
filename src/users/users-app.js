import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { renderTable } from "./presentation/render-table/render-table";
import { renderAddButton } from "./presentation/render-add-button//render-add-button";
import userStore from "./store/user-store";
import { renderModal } from "./presentation/render-modal/render-modal";
import { saveUser } from "./use-cases/save-user";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UserApp = async (element) => {
    element.innerHTML = 'Loading...';
    await userStore.loadNextPage();
    element.innerHTML = '';

    renderTable(element);
    renderButtons(element);
    renderAddButton(element);
    renderModal(element, async (userLike) => {
        const user = await saveUser(userLike);
        userStore.onUserChanged(user);
        renderTable();
    });
}