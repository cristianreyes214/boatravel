import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { DatabasesService } from '../../../databases.service';


@Component({
  selector: 'app-delete-room-component',
  templateUrl: './delete-room-component.component.html',
  styleUrls: ['./delete-room-component.component.css']
})
export class DeleteRoomComponentComponent implements OnInit {
  
  constructor(private formBuilder: FormBuilder, private databasesService: DatabasesService) { }

  ngOnInit(): void {

  }
  deleteRoomButton() {
    const deleteRoom = (document.getElementById('IDRoom') as HTMLInputElement).value;
    this.databasesService.deleteDataRoom(deleteRoom).subscribe();



  }

}
