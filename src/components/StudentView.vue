<template>
  <h1>Welcome to TCRC</h1>
  <div class="row">
    <div class="col-xs-6 col-md-3">
      <form>
        <div class="form-group">
          <label for="weekday">Weekday</label>
          <select id="weekday" class="form-control"
                  v-model="selectedDay">
            <option v-for="day in timeslot.days" value="{{$index}}">{{day}}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="timeslot">Time Slot</label>
          <select id="timeslot" class="form-control"
                  v-model="selectedSlot">
            <option v-for="slot in timeslot.slots"
                    value="{{$index}}">
              {{slot}}
            </option>
          </select>
        </div>
        <div class="form-group"
             v-if="tutors.length">
          <label for="available-tutor">Available Tutor</label>
          <select id="available-tutor" class="form-control"
                  v-model="selectedTutor">
            <option v-for="tutor in tutors">{{tutor}}</option>
          </select>
        </div>
        <button class="btn btn-primary"
                @click="add()"
        >Add
        </button>
        <div v-if="error" class="alert alert-danger" role="alert">
          {{error}}
        </div>
      </form>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12 col-md-6">
      <h3>My Schedule</h3>
      <table class="table table-striped table-bordered">
        <tr>
          <th>Weekday</th>
          <th>Time Slot</th>
          <th>Tutor</th>
          <th>Action</th>
        </tr>
        <tr v-for="item in mySchedule">
          <td>{{timeslot.days[item.day]}}</td>
          <td>{{timeslot.slots[item.slot]}}</td>
          <td>{{item.tutor}}</td>
          <td>
            <button class="btn btn-xs btn-danger"
                    @click="cancel($index)"
            >Cancel
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import Auth from '../services/auth';
  import ERROR from '../config/error.json';
  import CONFIG from '../config/config.json';
  const maxSession = CONFIG.student.maxSession;
  const sameTutorMaxSession = CONFIG.student.sameTutorMaxSession;
  export default{
    data() {
      return {
        error: '',
        timeslot: CONFIG.timeslot,
        selectedDay: 0,
        selectedSlot: 0,
        selectedTutor: '',
        mySchedule: [{tutor: 'tutor1', day: '1', slot: '2'}]
      };
    },
    methods: {
      cancel(index) {
        this.mySchedule.splice(index, 1);
      },
      add() {
        this.error = '';
        this.check();
        if (this.error) {
          return;
        }

        this.mySchedule.push({
          day: this.selectedDay,
          slot: this.selectedSlot,
          tutor: this.selectedTutor
        });
      },
      check() {
        if (this.mySchedule.length >= maxSession) {
          this.error = ERROR.studentMaxSession;
          return;
        }

        var sameTutorSchedule = this.mySchedule.filter((item) => {
          return item.tutor === this.selectedTutor;
        });
        if (sameTutorSchedule.length >= sameTutorMaxSession) {
          this.error = ERROR.studentMaxSessionSameTutor;
          return;
        }

        var sameSlotSchedule = this.mySchedule.filter((item) => {
          return item.day === this.selectedDay && item.slot === this.selectedSlot;
        });
        if (sameSlotSchedule.length) {
          this.error = ERROR.sessionExists;
          return;
        }
      }
    },
    computed: {
      tutors() {
        return ['tutor1', 'tutor2'];
      }
    },
    route: {
      canActivate() {
        return Auth.user.authenticated;
      }
    }
  };
</script>
