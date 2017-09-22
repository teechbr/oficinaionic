import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the FirebasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-firebase',
	templateUrl: 'firebase.html',
})
export class FirebasePage {
	item: any;
	items: FirebaseListObservable<any[]>;
	constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController) {
		this.items = db.list('/list');
		this.item = { nome: '' };
	}

	insert() {
		if (this.item.$key == null)
			this.items.push(this.item);
		else
			this.items.update(this.item, this.item);
		let toast = this.toastCtrl.create({
			message: 'Alterações realizadas com sucesso!',
			duration: 3000,
			position: 'top'
		});
		toast.present();
		this.item = { nome: '' };
	}

	acoes(item: any) {
		let actionSheet = this.actionSheetCtrl.create({
			title: 'Deseja remover o item ' + item + '?',
			buttons: [
				{
					text: 'Alterar',
					handler: () => {
						this.item = item;
					}
				},
				{
					text: 'Excluir',
					role: 'destructive',
					handler: () => {
						this.items.remove(item);
						let toast = this.toastCtrl.create({
							message: 'Item removido com sucesso!',
							duration: 3000,
							position: 'top'
						});
						toast.present();
					}
				}, {
					text: 'Cancelar',
					role: 'cancel'
				}
			]
		});
		actionSheet.present();
	}
}	