export class User {
    public userId: string;
    public firstName: string;
    public lastName: string;
    public userName: string;
    public email: string;
    public profileImageUrl: string;
    public lastLoginDate: Date;
    public lastLoginDateDisplay: Date;
    public joinDate: Date;
    public role: string;
    public authorities: string[]; 
    public active: boolean;
    public notLocked: boolean;
    public battleTag: string;
  
    constructor() {
      this.userId = '';
      this.firstName = '';
      this.lastName = '';
      this.userName = '';
      this.email = '';
      this.profileImageUrl = '';
      this.lastLoginDate = null;
      this.lastLoginDateDisplay = null;
      this.joinDate = null;
      this.role = '';
      this.authorities = [];
      this.active = false;
      this.notLocked = false;
      this.battleTag='';
    }
  
  }